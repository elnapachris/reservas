// Inicializa el calendario y maneja las reservas
const availableTimes = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const reservations = {}; // Guardará las reservas

function renderCalendar() {
    const calendarDiv = document.getElementById('calendar');
    availableTimes.forEach(time => {
        const timeSlot = document.createElement('div');
        timeSlot.innerText = time;
        timeSlot.className = 'time-slot';
        timeSlot.addEventListener('click', () => selectTime(time));
        calendarDiv.appendChild(timeSlot);
    });
}

function selectTime(time) {
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.style.display = 'block';
    document.getElementById('confirm-reservation').onclick = () => confirmReservation(time);
}

function confirmReservation(time) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        reservations[time] = { name, phone };
        sendWhatsAppMessage(name, phone, time);
        alert(`Reserva confirmada para ${time}.`);
        renderCalendar(); // Volver a renderizar el calendario
    }
}

function sendWhatsAppMessage(name, phone, time) {
    // Lógica para enviar un mensaje de WhatsApp (puedes usar la API de Twilio o similar)
}

// Llamar a la función para renderizar el calendario al cargar
window.onload = renderCalendar;
