// Menyiapkan Data Awal jika localStorage masih kosong
const initialProducts = [
  { id: 'PRD-001', name: 'Indomie Goreng', category: 'Makanan', price: 3500, storeStock: 4, warehouseStock: 50, minStock: 5 },
  { id: 'PRD-002', name: 'Minyak Goreng 1L', category: 'Sembako', price: 18000, storeStock: 12, warehouseStock: 30, minStock: 10 },
  { id: 'PRD-003', name: 'Kopi Kapal Api', category: 'Minuman', price: 1500, storeStock: 25, warehouseStock: 100, minStock: 15 },
  { id: 'PRD-004', name: 'Teh Botol Sosro', category: 'Minuman', price: 4000, storeStock: 3, warehouseStock: 40, minStock: 8 }
];

// Inisialisasi Database Lokal
function initDatabase() {
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(initialProducts));
  }
  if (!localStorage.getItem('transactions')) {
    localStorage.setItem('transactions', JSON.stringify([]));
  }
  if (!localStorage.getItem('transfers')) {
    localStorage.setItem('transfers', JSON.stringify([]));
  }
  if (!localStorage.getItem('auditLogs')) {
    localStorage.setItem('auditLogs', JSON.stringify([]));
  }
}

// Fungsi Helper untuk Ambil & Simpan Data
function getProducts() {
  return JSON.parse(localStorage.getItem('products')) || [];
}

function saveProducts(products) {
  localStorage.setItem('products', JSON.stringify(products));
}

// Jalankan inisialisasi saat file di-load
initDatabase();