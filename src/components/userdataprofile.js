import { Card, CardContent } from "@/components/ui/card";

const accountData = [
  { label: "First Name", value: "Jessica" },
  { label: "Last Name", value: "Methew" },
  { label: "Date of Birth", value: "10-20-2000" },
  { label: "Gender", value: "Woman" },
  { label: "Address", value: "Gilgit" },
  { label: "Phone Number", value: "0100 110 1000" },
  { label: "Website", value: <a href="https://www.xyz.com" className="text-blue-500">www.xyz.com</a> }
];

export default function AccountDetails() {
  return (
    <Card className="mx-auto bg-white shadow-none border-none">
      <CardContent>
        <h2 className="text-[28px] text-[#28303F] font-semibold mb-4">Account Details</h2>
        <div className="space-y-2">
          {accountData.map((item, index) => (
            <DetailRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between pb-2">
      <span className="text-[#828282] font-medium">{label}</span>
      <span className="text-[#28303F] font-medium">{value}</span>
    </div>
  );
}
