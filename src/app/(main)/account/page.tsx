"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/use-user";

export interface User {
  name?: string;
  email?: string;
  image?: string;
}

export default function ProfilePage() {
  const { user: sessionUser } = useUser();
  const [user, setUser] = useState<User | null>(sessionUser || null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => (prevUser ? { ...prevUser, [name]: value } : null));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Updated user:", user);
    setIsEditing(false);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4 ">
      <Card className="w-full max-w-md bg-white shadow-xl mb-20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-slate-800">
            Profile
          </CardTitle>
          <CardDescription className="text-slate-500">
            Manage your account information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user?.image} alt={user?.name} />
                  <AvatarFallback className="bg-slate-200 text-xl text-slate-600">
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={user?.name ?? ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="border-slate-200 bg-slate-50 focus:border-slate-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={user?.email ?? ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="border-slate-200 bg-slate-50 focus:border-slate-400"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          {isEditing ? (
            <>
              <Button
                type="submit"
                onClick={handleSubmit}
                className="bg-slate-700 text-white hover:bg-slate-800"
              >
                Save Changes
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-slate-200 text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-slate-700 text-white hover:bg-slate-800"
            >
              Edit Profile
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
