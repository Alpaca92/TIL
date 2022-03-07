import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid gap-10 bg-slate-400 py-20 px-10 shadow-xl">
      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mx-auto mt-5 w-1/2 rounded-xl bg-blue-500 p-3 text-center text-white hover:bg-teal-500">
          Checkout
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="-mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">USA</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl">
        <div className="flex items-center justify-between">
          <span>&larr;</span>
          <div className="space-x-3">
            <span>⭐ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">❤</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="mb-1.5 text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-2">
              <button className="h-5 w-5 rounded-full bg-yellow-500 bg-opacity-50 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-indigo-500 bg-opacity-50 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-teal-500 bg-opacity-50 ring-teal-500 ring-offset-2 transition focus:ring-2" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex aspect-square w-10 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl font-medium text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-10 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl font-medium text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
