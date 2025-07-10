# Alan Smolansky Tutoring Website

A professional tutoring website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Professional Design**: Modern, responsive design with beautiful UI
- **Contact Form**: Collects all necessary information from potential clients
- **Email Notifications**: Automatically sends inquiry details to Alan via email
- **Service Showcase**: Displays all tutoring services offered
- **Pricing Information**: Clear pricing structure and payment methods
- **Mobile Responsive**: Works perfectly on all devices

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Email Functionality

The website uses [Resend](https://resend.com) for sending emails. Here's how to set it up:

1. **Sign up for Resend** (free tier: 3,000 emails/month)
   - Go to [https://resend.com](https://resend.com)
   - Create a free account
   - Verify your email

2. **Get your API key**
   - In your Resend dashboard, go to "API Keys"
   - Create a new API key
   - Copy the key

3. **Set up environment variables**
   - Create a `.env.local` file in the root directory
   - Add your API key:

   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```

4. **Configure sending domain** (Optional but recommended)
   - In Resend dashboard, go to "Domains"
   - Add and verify your domain
   - Update the `from` email in `src/app/api/contact/route.ts`

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 4. Test the Contact Form

1. Fill out the contact form on the website
2. Submit the form
3. Check Alan's email (asmolansky@usc.edu) for the inquiry details

## Email Configuration

The email template is located in `src/app/api/contact/route.ts`. You can customize:

- **Email subject**: Currently shows "New Tutoring Inquiry - [Student Name]"
- **Email content**: HTML template with all form details
- **Recipient**: Currently set to asmolansky@usc.edu
- **From address**: Update to use your verified domain

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `RESEND_API_KEY` to Vercel environment variables
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add your `RESEND_API_KEY` to Netlify environment variables
4. Deploy!

## File Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Email API endpoint
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/
│   ├── About.tsx               # About Alan section
│   ├── ContactForm.tsx         # Contact form component
│   ├── Pricing.tsx             # Pricing section
│   └── Services.tsx            # Services showcase
```

## Customization

### Update Alan's Information

- **Bio**: Edit `src/components/About.tsx`
- **Services**: Modify `src/components/Services.tsx`
- **Pricing**: Update `src/components/Pricing.tsx`
- **Contact**: Change email in footer and API route

### Styling

The website uses Tailwind CSS. You can customize colors, fonts, and layout by modifying the Tailwind classes in each component.

## Support

If you need help with:

- **Resend setup**: Check their [documentation](https://resend.com/docs)
- **Next.js**: Visit [nextjs.org](https://nextjs.org)
- **Tailwind CSS**: See [tailwindcss.com](https://tailwindcss.com)

## License

This project is for Alan Smolansky's tutoring business.
