import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
    "https://eprznmqnejwxvxzsvjal.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwcnpubXFuZWp3eHZ4enN2amFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMTY4NjgsImV4cCI6MjA0ODg5Mjg2OH0.LZgmQScrXxA1xMnynnDiMOplLAOQLfWqty06TYj_fr8"
)

export async function fetchProducts() {
    const { data, error } = await supabase.from('higanbanaProducts').select("*");
    if (error) {
     console.log("Erro ao buscar produtos:", error)
    }else{
        return data
    }

}
