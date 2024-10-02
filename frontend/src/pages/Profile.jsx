import { Link } from "react-router-dom";
import {
  Bell,
  ChevronLeft,
  Edit2,
  Key,
  Lock,
  LogOut,
  Mail,
  Phone,
  Save,
  Shield,
  User,
} from "lucide-react";
import CardUser from "@/components/CardUser";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileTab from "@/components/ProfileTab";

function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/dashboard"
          className="text-primary hover:underline inline-flex items-center"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <CardUser />
        </aside>

        <main className="flex-1">
          <ProfileInfo />
          <ProfileTab />
        </main>
      </div>
    </div>
  );
}

export default Profile;
