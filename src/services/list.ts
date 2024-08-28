import { api } from '@/constant/api';

export const listJob = ({ Payload }: { Payload: any }) => {

  return new Promise((resolve, reject) => {
    fetch(`${api.job}?description=python&location=berlin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res: any) => {
        console.log('Check Data From API', res)
        resolve(res?.data?.Data);
      }).catch((err: string) => {
        reject(err)
      })
  })

  // return new Promise((resolve, reject) => {
  //   clientAPI
  //     .post(api.job.list, Payload)
  //     .then((res) => {
  //       resolve(res?.data?.Data);
  //     })
  //     .catch((err: AxiosError) => {
  //       reject(err.response?.data);
  //     });
  // });

  // https://dev6.dansmultipro.com/api/recruitment/positions.json?description=python&location=berlin
};
