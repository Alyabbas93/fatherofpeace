"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const PersonalInfoForm = () => {
  const [userData, setUserData] = useState({
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

  const [formData, setFormData] = useState({ ...userData });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUserData(formData);
  };

  const handleCancel = () => {
    setFormData({ ...userData });
  };

  return (
    <div className="bg-white p-6 rounded-md w-full mx-auto">
      <h2 className="text-[28px] font-semibold mb-5">Personal Information</h2>
      <h3 className="text-[20px] font-semibold mb-5">Account</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">First Name</label>
          <Input name="firstName" value={formData.firstName} onChange={handleChange} className="text-[#828282]" />
        </div>
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">Last Name</label>
          <Input name="lastName" value={formData.lastName} onChange={handleChange} className="text-[#828282]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">Gender</label>
          <Input name="gender" value={formData.gender} onChange={handleChange} className="text-[#828282]" />
        </div>
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">Email</label>
          <Input name="email" value={formData.email} onChange={handleChange} className="text-[#828282]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">Phone number</label>
          <Input name="phone" value={formData.phone} onChange={handleChange} className="text-[#828282]" />
        </div>
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">Bio</label>
          <Textarea name="bio" value={formData.bio} onChange={handleChange} className="h-20 text-[#828282]" />
        </div>
      </div>

      <h3 className="block text-base font-medium text-[#28303F] mb-2">Address</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">Country</label>
          <Input name="country" value={formData.country} onChange={handleChange} className="text-[#828282]" />
        </div>
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">City</label>
          <Input name="city" value={formData.city} onChange={handleChange} className="text-[#828282]" />
        </div>
      </div>

      <h3 className="block text-base font-medium text-[#28303F] mb-2">Security</h3>
      <div className="mb-4">
        <label className="block text-base font-medium text-[#28303F] mb-1">Current Password</label>
        <Input name="currentPassword" value={formData.currentPassword} type="password" onChange={handleChange} className="text-[#828282]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">New Password</label>
          <Input name="newPassword" value={formData.newPassword} type="password" onChange={handleChange} className="text-[#828282]" />
        </div>
        <div>
          <label className="block text-base font-medium text-[#28303F] mb-1">Confirm Password</label>
          <Input name="confirmPassword" value={formData.confirmPassword} type="password" onChange={handleChange} className="text-[#828282]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <Button variant="outline" className="border-[#28303F]" onClick={handleCancel}>Cancel</Button>
        <Button className="bg-[#4AB794] text-white px-6" onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;