const ftp = require("basic-ftp");
const path = require("path");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        console.log("🚀 Menghubungkan ke server hosting...");
        await client.access({
            host: "pmindonesia.or.id",
            user: "pmindone",
            password: "mK^hKCsjdM",
            port: 21,
            secure: false
        });

        console.log("📁 Mengunggah file React HANYA ke dalam /public_html...");
        // uploadFromDir langsung menentukan direktori tujuan tanpa menghapus folder di luarnya
        await client.uploadFromDir(path.resolve(__dirname, "build"), "/public_html");

        console.log("✅ UPLOAD SELESAI! Website utama sudah LIVE.");
    } catch (err) {
        console.log("❌ Error Upload:", err);
    }
    client.close();
}

deploy();