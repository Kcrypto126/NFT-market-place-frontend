'use client';

import { useState } from 'react';
import AttributesPanel from '@/components/layouts/nft/AttributesPanel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Attribute {
  value: string;
  trait_type: string;
}

interface Props {
  data: {
    owner: {
      id: string;
    };
    name: string;
    description: string;
    price: number;
    attributes: Attribute[];
  };
}

export default function NFTDetails({ data }: Props) {
  const [donation, setDonation] = useState(0);

  function donationOnChange(value: number) {
    setDonation(value);
  }

  return (
    <div>
      <h2 className='mb-5 text-center md:text-left'>{data.name}</h2>
      <div className='mb-10 flex flex-col text-center md:text-left lg:flex-row'>
        <span>Owned by&nbsp;</span>
        <span className='text-primary'>{data.owner.id}</span>
      </div>
      <div className='mb-5 text-center md:text-left'>
        <p className='mb-2 text-sm text-gray-700'>Description</p>
        <p>{data.description}</p>
      </div>
      <div className='mb-10 text-center md:mb-20 md:text-left'>
        <p className='mb-2 text-sm text-gray-700'>Attributes</p>
        <AttributesPanel attributes={data.attributes} />
      </div>
      <div className='rounded-lg bg-card p-5 lg:w-4/5'>
        <p className='mb-5 text-xl font-bold'>
          Price: {data.price.toFixed(3)} MATIC
        </p>
        <div className='mb-1 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-0'>
          <div className='flex items-center'>
            <span className='font-bold'>Charity:&nbsp;</span>
            <Input
              onChange={(e) => donationOnChange(+e.target.value)}
              className='h-[28px] w-28 rounded-md border p-1 focus:outline-primary '
              value={donation}
              type='number'
            />
            <span className='font-bold'>&nbsp;+&nbsp;</span>
            <span className='font-bold text-primary'>0.070</span>
          </div>
          <div className='flex'>
            <span className='font-bold'>Art:&nbsp;</span>0.030
          </div>
        </div>
        <Button className='mt-5 w-full rounded-md'>Buy</Button>
      </div>
    </div>
  );
}
