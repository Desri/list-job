'use client';
import React from 'react';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link';

export default function CardDetailJob(value: any) {
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
          {value.value.title}
        </h1>
      </div>
      <div className="border-8 border-solid border-[#dddddd] p-4">
        <div className="sm:flex gap-5">
          <div className="sm:w-8/12">
            <div className="job-des" dangerouslySetInnerHTML={{ __html: value.value.description }} />
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
                <Link href={`${value.value.company_url}`} className='text-[#0013c7] text-sm font-medium'>
                  {value.value.company_url}
                </Link>
              </div>
            </div>
            <div className="border-4 border-solid border-[#dddddd]">
              <div className="border-b-2 border-solid border-[#dddddd] py-3 mb-3">
                <h2 className='font-bold text-sm px-3'>
                  How to apply
                </h2>
              </div>
              <div className="job-des px-3" dangerouslySetInnerHTML={{ __html: value.value.how_to_apply }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
