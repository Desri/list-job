'use client';
import React, { useEffect, useState } from 'react';
import ListJobs from "@/components/Home/List";
import {Checkbox} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { api } from '@/constant/api';
import NoData from '../NoData';

type FormValues = {
  jobDescription: string;
  jobLocation: string;
  isFulltime: boolean;
};

export default function Homepage() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState<number>(1);
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' })

  const submitFilter = async () => {
    const data = getValues();
    await axios.get(`${api.job}?${data.jobDescription ? `description=${data.jobDescription}` : ''}${data.jobLocation ? `&location=${data.jobLocation}` : ''}${data.isFulltime ? `&full_time=true` : ''} `).then(res => {
      setJobs(res.data)
    })
  };

  const fetchListJobs = async () => {
    await axios.get(`${api.job}`).then(res => {
      setJobs(res.data)
    })
  };

  const loadMore = async () => {
    setPage(page + 1);
    await axios.get(`${api.job}?page=${page}`).then(res => {
      setJobs([...jobs, ...res.data])
    })
  };

  useEffect(() => {
    fetchListJobs();
  }, []);

  return (
    <>
      <form>
        <div className="grid grid-cols-3 gap-4 my-3">
          <div>
            <label className="font-bold text-sm">Job Description</label>
            <Input
              type="text"
              radius='none'
              className="rounded"
              placeholder="Filter by title, benefits, companies, expertise"
              {...register('jobDescription')}
              labelPlacement="outside"
            />
          </div>
          <div>
            <label className="font-bold text-sm">Location</label>
            <Input
              type="text"
              radius='none'
              className="h-[50px]"
              placeholder="Filter by city, state, zip code or country"
              {...register('jobLocation')}
              labelPlacement="outside"
            />
          </div>
          <div className="pt-7">
            <Checkbox {...register('isFulltime')}><span className="font-bold text-xs">Full Time Only</span></Checkbox>
            <Button className="rounded h-9 ml-3 px-5 text-white bg-[#95a7b3]" onClick={() => submitFilter()}>
              Search
            </Button>
          </div>
        </div>
      </form>
      <div className="border-8 border-solid border-[#dddddd] p-4">
        <h2 className="font-bold text-xl mb-3">
          Job List
        </h2>
        {jobs?.length !== 0 ? (
          <ul>
            {jobs?.map((item, idx) => (
              <ListJobs key={idx} {...item} />
            ))}
          </ul>
        ) : (
          <NoData />
        )}
        {jobs?.length !== 0 &&
          <Button className="rounded h-9 w-full mt-4 bg-[#4589c3] text-white" onClick={() => loadMore()}>
            More Jobs
          </Button>
        }
      </div>
    </>
  );
}
