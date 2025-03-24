import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share, Image, Bookmark, Info } from "lucide-react";

const FamilyValues = () => {
  const quotes = [
    {
      date: "2015-05-03",
      text: "The family is the school of love where we learn to love all humanity in its wide variety.",
      event: "International Day of Families Celebration",
    },
    {
      date: "2018-02-03",
      text: "When we understand that God is our parent, we realize that all people are brothers and sisters. This understanding is the foundation for building a world of peace.",
      event: "World Summit on Peace",
    },
  ];

  return (
    <div className="  p-4 bg-red-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">True Mother</h2>
      <p className="text-sm text-gray-600">Here are teachings from Dr. Hak Ja Han Moon about family values:</p>
      
      <div className="flex gap-2 my-2">
        <Button className="bg-blue-500 text-white px-3 py-1 rounded">Family Value Address</Button>
        <Button className="bg-blue-500 text-white px-3 py-1 rounded">Leadership Conference Speech</Button>
      </div>
      
      {quotes.map((quote, index) => (
        <Card key={index} className="mt-4 p-4 bg-white rounded-lg shadow">
          <div className="flex justify-between text-gray-500 text-sm">
            <span>{quote.date}</span>
            <Info className="text-lg" />
          </div>
          <CardContent className="mt-2">
            <p className="text-md font-semibold">“{quote.text}”</p>
            <p className="text-xs text-gray-500 mt-1">{quote.event}</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-2 text-gray-500">
                <Share />
                <Image />
                <Bookmark />
              </div>
              <Button className="bg-blue-500 text-white px-3 py-1 rounded">Send a Blessing</Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <input className="mt-4 w-full p-2 border rounded-lg" placeholder="Type Content Here" />
    </div>
  );
};

export default FamilyValues;
