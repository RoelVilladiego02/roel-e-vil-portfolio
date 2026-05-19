# Contact Form Email Setup Guide

Your portfolio now has a dedicated contact form! To make it fully functional, you need to set up **EmailJS** - a free service that sends emails without requiring a backend.

## Setup Steps

### 1. Create an EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Create an Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click "Create New Service"
3. Select **Gmail** (or your preferred email provider)
4. Configure it:
   - **Service Name**: e.g., "Gmail"
   - **Service ID**: `service_roel_portfolio` (or customize in ContactForm.vue)
   - Follow EmailJS instructions to connect your Gmail account
5. Click "Create Service"

### 3. Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click "Create New Template"
3. Set template name: `Contact Form` 
4. Template ID should be: `template_contact_form` (or customize in ContactForm.vue)
5. Use this template content:

```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}
To: {{to_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

6. Click "Save Template"

### 4. Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**
3. Update the `ContactForm.vue` file:

In `src/components/ui/ContactForm.vue`, find line ~10:
```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
```

Replace `'YOUR_PUBLIC_KEY_HERE'` with your actual public key from EmailJS.

### 5. (Optional) Update Service/Template IDs
If you used different names, update these in `ContactForm.vue`:
```javascript
const EMAILJS_SERVICE_ID = 'service_roel_portfolio';
const EMAILJS_TEMPLATE_ID = 'template_contact_form';
```

### 6. Install Dependencies
```bash
npm install
```

### 7. Test Your Form
1. Start the dev server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the test form
4. Check your email to confirm it works!

## Features Included

✅ Form validation (all fields required)
✅ Loading state while sending
✅ Success message on submission
✅ Error handling with fallback email link
✅ Dark mode support
✅ Responsive design
✅ Accessibility features

## Troubleshooting

**"Failed to send message" error?**
- Verify your Public Key is correctly set in ContactForm.vue
- Check EmailJS dashboard to ensure service and template IDs match
- Verify Gmail service is properly connected

**Not receiving emails?**
- Check spam/junk folder
- Verify reply_to email is correct
- Test sending directly from EmailJS dashboard

**Free tier limitations:**
- EmailJS free tier: 500 emails/month
- Upgrade to paid plan if needed

## Security Notes

- The Public Key is safe to expose (it's client-side only)
- Never share your Private Key
- Consider storing keys in `.env` file for production (requires Vite env setup)
- All emails are sent through EmailJS servers (no backend needed)

## Custom Configuration (Advanced)

To use environment variables instead of hardcoding:

1. Create `.env` file in project root:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

2. Update ContactForm.vue:
```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

---

**Done!** Your contact form is ready to receive messages from potential clients and collaborators. 🎉
