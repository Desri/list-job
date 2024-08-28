'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'
import axios from 'axios';
import { api } from '@/constant/api';
import CardDetailJob from './CardDetail';

export default function DetailJobComponent() {
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
      <CardDetailJob value={detailJobs} />
    </>
  );
}
