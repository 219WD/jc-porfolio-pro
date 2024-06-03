import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Cliente 1', feedback: '¡Excelente trabajo!' },
    { name: 'Cliente 2', feedback: 'Muy profesional y dedicado.' },
    // Añade más testimonios según sea necesario
  ];

  return (
    <section className="testimonials-section">
      <h2>Testimonios</h2>
      <div className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>{testimonial.feedback}</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
