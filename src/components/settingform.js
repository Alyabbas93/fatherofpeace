"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: "Jessica",
    lastName: "Mathew",
    gender: "Woman",
    email: "Jessica@gmail.com",
    phone: "0100 110 1000",
    bio: "Passionate about peace initiatives and family values. I love sharing True Mother's teachings with my community.",
    country: "Gilit",
    city: "Gilit",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-md  w-full border mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>

      <h3 className="text-lg font-medium mb-2">Account</h3>
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <Input name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <Input name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <Input name="gender" value={formData.gender} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input name="email" value={formData.email} onChange={handleChange} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
          <Input name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <Textarea name="bio" value={formData.bio} onChange={handleChange} className="h-20" />
        </div>
      </div>

      <h3 className="text-lg font-medium mb-2">Address</h3>
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <Input name="country" value={formData.country} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <Input name="city" value={formData.city} onChange={handleChange} />
        </div>
      </div>

      <h3 className="text-lg font-medium mb-2">Security</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
        <Input name="currentPassword" value={formData.currentPassword} type="password" onChange={handleChange} />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <Input name="newPassword" value={formData.newPassword} type="password" onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <Input name="confirmPassword" value={formData.confirmPassword} type="password" onChange={handleChange} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-green-500 text-white px-6">Save</Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
