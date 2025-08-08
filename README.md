# Hattan Portfolio Blog - Dynamic Open Graph Image Support

## Overview

This project is configured to automatically set the correct Open Graph (`og:image`) meta tag for each blog post, so that when a blog post link is shared on social media (Facebook, Twitter, WhatsApp, LinkedIn, etc.), the main image of the post appears in the link preview.

## How It Works

- The `BlogPost.jsx` component dynamically sets Open Graph meta tags using the [`react-helmet-async`](https://github.com/staylor/react-helmet-async) library.
- The main image for each blog post is determined by the `getImageUrl()` function, which ensures the image URL is absolute and valid.
- The Open Graph meta tags (including `og:image`) are rendered in the `<head>` of the page via the `renderSEO()` function, which is called at the top of the BlogPost component's render output.
- Twitter Card meta tags are also set for rich previews on Twitter.
- **Fallback Image**: If a blog post doesn't have an image, it will use `https://hattanarif.com/og-image.png` as a fallback.

## Testing Link Previews

### Method 1: WhatsApp Testing

1. **Build and deploy your site** (if not already done):
   ```bash
   npm run build
   npm run postbuild
   ```
2. **Open WhatsApp** on your phone
3. **Go to any chat** (can be your own "Message Yourself")
4. **Paste your blog post URL** (e.g., `https://hattanarif.com/blog/your-post-id`)
5. **Wait 2-3 seconds** - you should see a rich preview with:
   - Blog post title
   - Blog post description
   - Blog post image (or fallback image)
   - Your domain name

### Method 2: Facebook Sharing Debugger

1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your blog post URL
3. Click "Debug"
4. You should see the Open Graph meta tags including the image

### Method 3: Twitter Card Validator

1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your blog post URL
3. You should see a preview of how it will appear on Twitter

### Method 4: Browser Developer Tools

1. Open your blog post in the browser
2. Right-click and "View Page Source"
3. Search for `og:image` - you should see the meta tag with your image URL

## Debugging

### Console Logs

The component now includes console logs to help debug image URL generation:

- Check browser console for "SEO Debug Info" when viewing a blog post
- Look for "Generated image URL" or "Blog post has no image" messages

### Common Issues and Solutions

1. **No image appears in preview**:

   - Check that the blog post has an `image` field in the database
   - Ensure the image URL is accessible (not localhost)
   - Verify the image is at least 1200x630 pixels for best results

2. **Fallback image appears instead of blog post image**:

   - The blog post image might be missing or invalid
   - Check the console logs for debugging information
   - Ensure the image URL is properly formatted

3. **Old preview cached**:
   - Social media platforms cache previews
   - Use Facebook Sharing Debugger to force refresh
   - Wait 24-48 hours for cache to clear naturally

## Requirements for Link Previews

- The image should be at least 1200x630 pixels for best results
- The image must not be a placeholder or empty
- The image must be accessible (not behind authentication or on localhost)
- The image URL must be absolute (full URL, not relative path)

## Example

When a blog post is published with an image, the following meta tag will appear in the HTML `<head>`:

```html
<meta
  property="og:image"
  content="https://hattanarif.com/path/to/blog-image.jpg"
/>
```

If no image is available, it will use the fallback:

```html
<meta property="og:image" content="https://hattanarif.com/og-image.png" />
```

## Deployment Notes

- The project uses `react-snap` for prerendering, ensuring meta tags are present in static HTML
- Meta tags are generated server-side for better social media crawler compatibility
- All Open Graph and Twitter Card meta tags are properly configured

## No Further Action Needed

The implementation is complete and should work automatically for all blog posts. Simply ensure your blog posts have proper images in the database, and the link previews will work correctly.
