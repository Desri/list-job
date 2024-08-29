'use client';
import React from 'react';
import { DetailListJobs } from "@/constant/jobs";
import Link from 'next/link';
import { formatDate } from '@/lib/helpers';

const ListJobs = (props: DetailListJobs) => {
  return (
    <>
      <Link href={`/detail/${props.id}`}>
        <li className="border-b-2 border-solid border-[#dddddd] py-3">
          <div className="flex items-center gap-5">
            <div className='w-3/4'>
              <h3 className="text-blue-500 font-medium">
                {props.title}
              </h3>
              <div className="flex text-sm font-medium">
                <span className="text-slate-500">{props.company} - </span><span className="text-green-500 ml-1 font-bold">{props.type}</span>
              </div>
            </div>
            <div className="w-1/4 text-right">
              <p className="text-slate-500 font-bold text-sm">
                {props.location}
              </p>
              {props.created_at &&
                <p className="text-slate-500 font-medium text-sm">
                  {formatDate(props.created_at)}
                </p>
              }
            </div>
          </div>
        </li>
      </Link>
    </>
  );
}

export default ListJobs;
