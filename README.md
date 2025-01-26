# Upskilling Filteration Task

This project build by React with Vite, Tailwindcss.

## Published to gh-pages

Link [gh-pages](https://halimmahmoud.github.io/upskillingtask/)

## To test in your machine

Clone the repo

Install deps

## API POST call

There is node server file in project to test api post call from different your own server if the given url in task is not working

```tsx
// Form.tsx
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const response = await fetch("http://upskilling-egypt.com:3001/contact", {
      // if url in the task is failling - try to post to test server
      // install deps first with : npm i express cors bodyParser & run : node nodeserver.js
      // comment line 23 and uncomment line 27
      // const response = await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.error("error: ", error);
  }
};
```

## Build with responsiveness in mind
