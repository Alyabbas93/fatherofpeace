// // src/app/api/auth/actions.js or inside a Server Component
// import { createClient } from "@/utils/supabase/server";

// export async function login(formData) {
//   const supabase = await createClient();

//   const data = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };

//   const { error } = await supabase.auth.signInWithPassword(data);

//   if (error) {
//     return new Response(null, { status: 302, headers: { Location: "/error" } });
//   }

//   return new Response(null, { status: 302, headers: { Location: "/" } });
// }

// export async function signup(formData) {
//   const supabase = await createClient();

//   const firstName = formData.get("first-name");
//   const lastName = formData.get("last-name");
//   const email = formData.get("email");

//   const data = {
//     email,
//     password: formData.get("password"),
//     options: {
//       data: {
//         full_name: `${firstName} ${lastName}`,
//         email: email,
//       },
//     },
//   };

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     return new Response(null, { status: 302, headers: { Location: "/error" } });
//   }

//   return new Response(null, { status: 302, headers: { Location: "/" } });
// }

// export async function signout() {
//   const supabase = await createClient();
//   const { error } = await supabase.auth.signOut();

//   if (error) {
//     return new Response(null, { status: 302, headers: { Location: "/error" } });
//   }

//   return new Response(null, { status: 302, headers: { Location: "/logout" } });
// }

// export async function signInWithGoogle() {
//   const supabase = await createClient();
//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: "google",
//     options: {
//       queryParams: {
//         access_type: "offline",
//         prompt: "consent",
//       },
//     },
//   });

//   if (error) {
//     return new Response(null, { status: 302, headers: { Location: "/error" } });
//   }

//   return new Response(null, { status: 302, headers: { Location: data.url } });
// }
