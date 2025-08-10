/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_URL: string
  readonly VITE_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}