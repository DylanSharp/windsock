import {createClient} from '@supabase/supabase-js';

const supabaseUrl: string = 'https://qrvjebsxcbqbphagcjzv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmplYnN4Y2JxYnBoYWdjanp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MzIxMzksImV4cCI6MjAyNjQwODEzOX0.nvpQRt5PmtQ3cxrbPnvR1_zZt5jtD50a0wXnzfDG_Bs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)