<h1>Lingo - Saas platform for  learning new languages.</h1>

![lingo-1](https://github.com/sudh-202/duolingo_clone_v.1/assets/87563365/0176da4a-d00d-4419-b2f4-5e341693c5cd)


# Table of Contents
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Stats](#stats)
- [Contribute](#contribute)
- [Acknowledgements](#acknowledgements)
- [Buy Me a Coffee](#buy-me-a-coffee)
- [Follow Me](#follow-me)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [Give A Star](#give-a-star)
- [Star History](#star-history)

## Folder Structure

Here is the folder structure of this app:

```plaintext
duolingo-clone/
  |- actions/
    |- challenge-progress.ts
    |- user-progress.ts
    |- user-subscription.ts
  |- app/
    |-- (main)/
        |--- courses/
        |--- leaderboard/
        |--- learn/
        |--- quests/
        |--- shop/
        |--- layout.tsx
    |-- (marketing)/
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- admin/
        |--- challenge/
        |--- challengeOption/
        |--- course/
        |--- lesson/
        |--- unit/
        |--- app.tsx
        |--- page.tsx
    |-- api/
        |--- challengeOptions/
        |--- challenges/
        |--- courses/
        |--- lessons/
        |--- units/
        |--- webhooks/stripe/
    |-- lesson/
        |--- [lessonId]/
        |--- card.tsx
        |--- challenge.tsx
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
        |--- question-bubble.tsx
        |--- quiz.tsx
        |--- result-card.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- modals/
    |-- ui/
    |-- feed-wrapper.tsx
    |-- mobile-wrapper.tsx
    |-- mobile-sidebar.tsx
    |-- promo.tsx
    |-- quests.tsx
    |-- sidebar-item.tsx
    |-- sidebar.tsx
    |-- sticky-wrapper.tsx
    |-- user-progress.tsx
  |- config/
    |-- index.ts
  |- db/
    |-- drizzle.ts
    |-- queries.ts
    |-- schema.ts
  |- lib/
    |-- admin.ts
    |-- stripe.ts
    |-- utils.ts
  |- public/
  |- scripts/
    |-- prod.ts
    |-- reset.ts
    |-- seed.ts
  |- store/
    |-- use-exit-modal.ts
    |-- use-hearts-modal.ts
    |-- use-practice-modal.ts
  |- types/
    |-- canvas.ts
  |- .env
  |- .env.example
  |- .eslintrc.js
  |- .gitignore
  |- .prettierrc.json
  |- components.json
  |- constants.ts
  |- drizzle.config.ts
  |- environment.d.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

## Getting Started
### 1. Make sure Git and NodeJS is installed.
### 2. Clone this repository to your local computer.
### 3. Create .env file in root directory.
### 4. Contents of <span style="background-color: #FFFF00">.env:</span>

```
# .env

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<host>:<post>/lingo?sslmode=require"

# stripe api key and webhook
STRIPE_API_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# public app url
NEXT_PUBLIC_APP_URL=http://localhost:3000

# clerk admin user id(s) separated by comma and space (, )
CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx, user_xxxxxxxxxxxxxxxxxxxxxx"
```

### 5. Obtain Clerk Authentication Keys

   Source: Clerk Dashboard or Settings Page

   Procedure:
   - Log in to your Clerk account.
   - Navigate to the dashboard or settings page.
   - Look for the section related to authentication keys.
   - Copy the NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY provided in that section.

### 6. Retrieve Neon Database URI

   Source: Database Provider (e.g., Neon, PostgreSQL)

   Procedure:
   - Access your database provider's platform or configuration.
   - Locate the database connection details.
   - Replace <user>, <password>, <host>, and <port> placeholders in the URI with your actual database credentials.
   - Ensure to include ?sslmode=require at the end of the URI for SSL mode requirement.

### 7. Fetch Stripe API Key and Webhook Secret

   Source: Stripe Dashboard

   Procedure:
   - Log in to your Stripe account.
   - Navigate to the dashboard or API settings.
   - Find the section related to API keys and webhook secrets.
   - Copy the STRIPE_API_SECRET_KEY and STRIPE_WEBHOOK_SECRET.

### 8. Specify Public App URL

   Procedure:
   - Replace http://localhost:3000 with the URL of your deployed application.

### 9. Identify Clerk Admin User IDs

   Source: Clerk Dashboard or Settings Page

   Procedure:
   - Log in to your Clerk account.
   - Navigate to the dashboard or settings page.
   - Find the section related to admin user IDs.
   - Copy the user IDs provided, ensuring they are separated by commas and spaces.

### 10. Save and Secure:

    - Save the changes to the .env.local file.
    - Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.
### 11. Run the Seed Script:

    - In the same terminal, run the following command to execute the seed script:

      ```
      npm run db:prod
      ```

    - This command uses npm to execute the Typescript file (scripts/prod.ts) and writes challenges data in the database.

### 12. Verify Data in Database:

    - Once the script completes, check your database to ensure that the challenges data has been successfully seeded.

Now the app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## Screenshots
Screenshots of the project.
![lingo-2](https://github.com/sudh-202/duolingo_clone_v.1/assets/87563365/0ebf1822-9d22-4447-be74-d84d48309428)
![lingo-3](https://github.com/sudh-202/duolingo_clone_v.1/assets/87563365/df48b67e-0180-41b9-91e6-c40967f7d292)
![lingo-4](https://github.com/sudh-202/duolingo_clone_v.1/assets/87563365/6a6e4ed9-144e-40ad-8406-ed45df8ff885)
![lingo-6](https://github.com/sudh-202/duolingo_clone_v.1/assets/87563365/22444509-8970-4bdd-9e8c-46a59c06dda9)
![lingo-8](https://github.com/sudh-202/duolingo_clone_v.1/assets/87563365/83e87ff2-9126-4210-8700-4401c1601992)



## Tech Stack
![Uploading pngwing.com.png…]()


## Deployment Link 
[duolingo-clone-v-1.vercel.app](https://duolingo-clone-v-1.vercel.app/)



## Acknowledgements
Thanks to the following resources and dependencies that are used in Lingo:

- [CodeWithAntonio](https://codewithantonio.com/)
- Special Thanks to [Kenney Assets](https://kenney.nl/)
- [Freesound](https://freesound.org/)
- [Elevenlabs AI](https://elevenlabs.io/)
- [Flagpack](https://flagpack.xyz/)

## Dependencies

- `@clerk/nextjs: ^4.29.9`
- `@neondatabase/serverless: ^0.9.0`
- `@radix-ui/react-avatar: ^1.0.4`
- `@radix-ui/react-dialog: ^1.0.5`
- `@radix-ui/react-progress: ^1.0.3`
- `@radix-ui/react-separator: ^1.0.3`
- `@radix-ui/react-slot: ^1.0.2`
- `class-variance-authority: ^0.7.0`
- `clsx: ^2.1.0`
- `dotenv: ^16.4.5`
- `drizzle-orm: ^0.30.4`
- `lucide-react: ^0.359.0`
- `next: 14.1.4`
- `next-themes: ^0.3.0`
- `ra-data-simple-rest: ^4.16.12`
- `react: ^18`
- `react-admin: ^4.16.13`
- `react-circular-progressbar: ^2.1.0`
- `react-confetti: ^6.1.0`
- `react-dom: ^18`
- `react-use: ^17.5.0`
- `sonner: ^1.4.32`
- `stripe: ^14.22.0`
- `tailwind-merge: ^2.2.2`
- `tailwindcss-animate: ^1.0.7`
- `zustand: ^4.5.2`


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel
https://duolingo-clone-v-1.vercel.app/

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Give A Star

⭐ If you find this repository helpful, please consider giving it a star. It helps more people discover and benefit from this project.


