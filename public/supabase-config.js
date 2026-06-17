const SUPABASE_URL =
"https://ftscimxddgbgznpzdgjz.supabase.co";


const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0c2NpbXhkZGdiZ3pucHpkZ2p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NTU5NTQsImV4cCI6MjA5NzIzMTk1NH0.IsfRdxdkA_CS3ERh1qzACRuSZophSNnBHrovmdG1Utw";


const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_ANON_KEY
);
