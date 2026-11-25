const db = window.supabase.createClient(
    "https://tomksiajuzvfxajfopkv.supabase.co",
    "sb_publishable_M1RrJMKASePaBrVvdlHSFQ_10nW_E6M"
)

const params = new URLSearchParams(window.location.search);
document.getElementById("namaTamu").innerText = params.get("to") || "Tamu Undangan"

document.getElementById("btnOpen").onclick = function() {
    document.getElementById("opening").classList.add("turun");

    setTimeout(() => {
        document.getElementById("opening").style.display = "none";
        document.getElementById("isiUndangan").style.display = "block";
        document.getElementById("musik").play();
    }, 1000);
    
}

document.getElementById("btnMusik").onclick = function() {
    const musik = document.getElementById("musik");

    if(musik.paused) {
        musik.play();
    } else {
        musik.pause();
    }
};

document.getElementById("formRSVP").onsubmit = async function(e) {
    e.preventDefault();

    const data = {
        nama: document.getElementById("nama").value,
        kehadiran: document.getElementById("kehadiran").value,
        jumlah_tamu: document.getElementById("jumlah_tamu").value,
        ucapan: document.getElementById("ucapan").value
    };

    const { error } = await db.from("rsvp").insert([data]);

    if(error) {
        alert("Gagal mengirim data!")
    } else {
        alert("Terimakasih! berhasil mengirim data ke sistem.")
    }
    
};

function salinRekening() {
    const nomor = document.getElementById("nomorRekening").innerText;
    navigator.clipboard.writeText(nomor).then(() =>  alert("Nomor Rekening Berhasil di salin!")).catch(() => alert("Gagal menyalin nomor!"))
}

