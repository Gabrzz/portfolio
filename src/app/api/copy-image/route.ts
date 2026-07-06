import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    fs.copyFileSync(
      "C:/Users/06gab/.gemini/antigravity-ide/brain/9307662c-8497-44d9-ba6c-75a2401633da/avatar_processed_1783294206027.png",
      "c:/Users/06gab/OneDrive/Documentos/Antigravity/portfolio/public/avatar_processed.png"
    );
    return NextResponse.json({ success: true, message: "Imagem copiada com sucesso!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
