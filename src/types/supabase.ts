export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      items: {
        Row: {
          id: string
          created_at: string
          name: string
          price: number
          description: string | null
          image: string
          variant_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          price: number
          description?: string | null
          image: string
          variant_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          price?: number
          description?: string | null
          image?: string
          variant_id?: string | null
        }
      }
      variants: {
        Row: {
          variant_id: string
          variant: string
        }
        Insert: {
          variant_id: string
          variant: string
        }
        Update: {
          variant_id?: string
          variant?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
