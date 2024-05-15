# AmikomConnect

Social Media Yang digunakan untuk Project UTS dan UAS

Demo : https://amikomconnect.vercel.app/

## ⚙️ Tech Stack

Next.js, JavaScript, TailwindCSS, MongoDB, Clerk

## 🔋 Features

- SignIn & SignUp
- Create Account
- Post Image (localhost)
- Edit Post
- Saved Posts
- Liked Posts
- Follow & Following
- Search by Tag/Name
- Responsive

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

- Git
- Node.js
- npm (Node Package Manager)

```bash
git clone https://github.com/Anezz12/v1.0.git cd v1.0
```

Installation

Install the project dependencies using npm:

```bash
npm run dev
```

Set Up Environment Variables
Create a new file named .env.local in the root of your project and add the following content:

```bash
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
WEBHOOK_SECRET=

#MongoDB
MONGODB_URL=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the Clerk, MongoDB

Running the Project

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.


## Authors

- [Harsena](https://github.com/Anezz12)
- [Adit Noval](https://github.com/Adityanovall)
- [Reva Danindra](https://github.com/RevaDaanindra)
