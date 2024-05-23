"use client";
import Button from "@/Components/ui/Button";
import React from "react";

function page() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Primary Address</h3>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="street"
                >
                  Street Address
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  id="street"
                  name="street"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    id="city"
                    name="city"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    id="state"
                    name="state"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="zip"
                >
                  Zip Code
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  id="zip"
                  name="zip"
                  type="text"
                />
              </div>
              <Button className="w-full" variant="primary">
                Save Address
              </Button>
            </form>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Additional Addresses</h3>
            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium">Home</p>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      Remove
                    </Button>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  123 Main St, Anytown USA 12345
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium">Work</p>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      Remove
                    </Button>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  456 Oak Rd, Somewhere City 67890
                </p>
              </div>
            </div>
            <Button className="w-full mt-4" variant="primary">
              Add Address
            </Button>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Change Password</h3>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="current-password"
                >
                  Current Password
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  id="current-password"
                  name="current-password"
                  type="password"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="new-password"
                >
                  New Password
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  id="new-password"
                  name="new-password"
                  type="password"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                />
              </div>
              <Button className="w-full" variant="primary">
                Change Password
              </Button>
            </form>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">
              Two-Factor Authentication
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p>Two-Factor Authentication</p>
                {/* <Switch id="two-factor" /> */}
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="text-lg font-bold mb-2">Login Activity</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      Logged in from New York, NY
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Apr 25, 2023 10:30 AM
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      Logged in from San Francisco, CA
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Apr 22, 2023 3:15 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                id="name"
                name="name"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                id="phone"
                name="phone"
                type="tel"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="profile-picture"
              >
                Profile Picture
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {/* <UploadIcon className="mx-auto h-12 w-12 text-gray-400" /> */}
                  <div className="flex text-sm text-gray-600 dark:text-gray-400">
                    <label
                      className="relative cursor-pointer bg-white dark:bg-gray-900 rounded-md font-medium text-primary hover:text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                      htmlFor="profile-picture"
                    >
                      <span>Upload a file</span>
                      <input
                        className="sr-only"
                        id="profile-picture"
                        name="profile-picture"
                        type="file"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <Button className="md:col-span-2" variant="primary">
              Save Changes
            </Button>
          </form>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium">Apple AirPods Pro</p>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Wireless earbuds with noise cancellation
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium">
                  Bose Noise Cancelling Headphones 700
                </p>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Premium noise-cancelling headphones
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium">Fitbit Versa 3</p>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Advanced fitness tracker with GPS
              </p>
            </div>
          </div>
          <Button className="w-full mt-4" variant="primary">
            Add to Watchlist
          </Button>
        </div>
      </section>
    </div>
  );
}

export default page;
