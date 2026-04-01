"use client";

import { Box, Typography, Container, Stack, Paper, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

//data
import content from '@/data/homeContent.json'

// Dados fictícios baseados no perfil de clientes da FMFC
const reviews = [
  {
    name: "Dr. James Wilson",
    role: "Medical Director, MRI Diagnostic Center",
    text: "FMFC has transformed our facility. Their attention to detail in high-tech environments like our MRI rooms is unmatched. Truly professional and reliable.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Administrator, Outpatient Surgery Suites",
    text: "We've tried several cleaning companies, but FMFC is the only one that truly understands medical-grade sanitation. Our inspection scores have never been better.",
    rating: 5
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Owner, Concierge Family Practice",
    text: "The floors look brand new every single day. They are punctual, thorough, and understand the privacy and care our patients expect.",
    rating: 5
  }
];

export default function ReviewsSection() {
  const { reviews } = content.home
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 }, 
        bgcolor: 'background.default' // Um cinza bem clarinho para diferenciar da seção branca acima
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 2 }}
            >
              {reviews.preTitle}
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ fontWeight: 800, color: 'primary.main' }}
            >
              {reviews.title}
            </Typography>
          </Stack>

          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4 
            }}
          >
            {reviews.testimonials.map((testimonial, index) => (
              <Paper 
                key={index}
                elevation={2}
                sx={{ 
                  p: 4, 
                  flex: 1, 
                  borderRadius: '20px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <FormatQuoteIcon 
                  sx={{ 
                    position: 'absolute', 
                    top: 20, 
                    right: 20, 
                    fontSize: 40, 
                    color: 'rgba(0, 85, 150, 0.1)' 
                  }} 
                />
                
                <Box>
                  <Rating value={testimonial.stars} readOnly sx={{ mb: 2, color: 'secondary.main' }} />
                  <Typography 
                    variant="body1" 
                    sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 3, lineHeight: 1.7 }}
                  >
                    {testimonial.text}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.position}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}