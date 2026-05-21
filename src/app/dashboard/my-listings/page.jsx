import AdoptRequest from '@/app/allpets/[id]/AdoptRequest';
import MyListings from '@/app/components/MyListings';
import React from 'react';


const page = () => {
    return (
        <div className='container mx-auto '>
            <h1 className='text-5xl font-bold p-8 '>My Listings</h1>
           <MyListings></MyListings>
        </div>
    );
};

export default page;