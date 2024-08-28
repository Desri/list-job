'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import { api } from '@/constant/api';

export default function DetailPage() {
  const [detailJobs, setDetailJob] = useState({});
  const params = useParams<{ tag: string; slug: string }>()

  const fetchDetailJob = async () => {
    await axios.get(`${api.detail}/${params.slug}`).then(res => {
      setDetailJob(res.data)
      console.log('Check Data', res.data)
    })
  };

  useEffect(() => {
    fetchDetailJob();
  }, []);
  return (
    <>
      <div className="mb-5 pb-4 pt-3 border-b-2 border-solid border-[#dddddd]">
        <Breadcrumbs
          separator="/"
          itemClasses={{
            separator: "px-2"
          }}
        >
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Full Time</BreadcrumbItem>
          <BreadcrumbItem>Berlin</BreadcrumbItem>
        </Breadcrumbs>
        <h1 className="font-bold text-lg">
          {detailJobs.title}
        </h1>
      </div>
      <div className="border-8 border-solid border-[#dddddd] p-4">
        <div className="sm:flex gap-5">
          <div className="sm:w-8/12">
            <div className="job-des" dangerouslySetInnerHTML={{ __html: detailJobs.description }} />
          </div>
          <div className="sm:w-4/12">
            <div className="border-4 border-solid border-[#dddddd] mb-4">
              <Image
                src="/static/company.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className='px-2 py-3'>
                <Link href={`${detailJobs.company_url}`} className='text-[#0013c7] text-sm font-medium'>
                  {detailJobs.company_url}
                </Link>
              </div>
            </div>
            <div className="border-4 border-solid border-[#dddddd]">
              <div className="border-b-2 border-solid border-[#dddddd] py-3 mb-3">
                <h2 className='font-bold text-sm px-3'>
                  How to apply
                </h2>
              </div>
              <div className="job-des px-3" dangerouslySetInnerHTML={{ __html: detailJobs.how_to_apply }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
