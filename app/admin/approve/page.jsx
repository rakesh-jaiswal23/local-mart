'use client';
import { storesDummyData } from '@/assets/assets';
import StoreInfo from '@/components/admin/StoreInfo';
import Loading from '@/components/Loading';
import {
  approveSellerRequest,
  getsellerRequest,
  rejectSellerRequest,
} from '@/lib/service/authService';
import { store } from '@/lib/store';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function AdminApprove() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(stores[0]._id);

  //   const fetchStores = async () => {
  //   setStores(storesDummyData);
  //     setLoading(false);
  //   };

  const handleApprove = async storeId => {
    try {
      const res = await approveSellerRequest(storeId);

      setStores(prev => prev.filter(store => store._id !== storeId));
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.data?.message || 'something went wrong');
    }
  };
  const handleReject = async storeId => {
    try {
      const res = await rejectSellerRequest(storeId);

      setStores(prev => prev.filter(store => store._id !== storeId));
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.data?.message || 'something went wrong');
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getsellerRequest();
        setStores(res.data?.data);
      } catch (error) {
        console.log(error?.message);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return !loading ? (
    <div className="text-slate-500 mb-28">
      <h1 className="text-2xl">
        Approve <span className="text-slate-800 font-medium">Stores</span>
      </h1>

      {stores?.length ? (
        <div className="flex flex-col gap-4 mt-4">
          {stores.map(store => (
            <div
              key={store._id}
              className="bg-white border rounded-lg shadow-sm p-6 flex max-md:flex-col gap-4 md:items-end max-w-4xl"
            >
              {/* Store Info */}
              <StoreInfo store={store} />

              {/* Actions */}
              <div className="flex gap-3 pt-2 flex-wrap">
                <button
                  onClick={() => handleApprove(store._id)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(store?._id)}
                  className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600 text-sm"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-80">
          <h1 className="text-3xl text-slate-400 font-medium">No Application Pending</h1>
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
}
