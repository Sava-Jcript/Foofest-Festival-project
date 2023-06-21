
  
  
  export async function sendDataDB(payload) {
 
  
    const res = await fetch( "https://gbaxrceynntdiffiuoum.supabase.co/rest/v1/contact_form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwdmt2cWJ1eWNtenhhZ2NxdnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NDg3NzksImV4cCI6MjAwMTAyNDc3OX0.8SiiRoXfGKSslpHtIr_JD3PEeTflFIA1N4IVsUsjkFU",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwdmt2cWJ1eWNtenhhZ2NxdnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NDg3NzksImV4cCI6MjAwMTAyNDc3OX0.8SiiRoXfGKSslpHtIr_JD3PEeTflFIA1N4IVsUsjkFU",
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  }
  
  