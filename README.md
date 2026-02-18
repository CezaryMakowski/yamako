# Yamako - Osobista Strona Internetowa

Nowoczesna, responsywna strona internetowa stworzona z użyciem **Next.js 15**, **React 19** i **TypeScript**. Zawiera informacje o oferowanych sesjach, galerię i formularz kontaktowy.

## 📁 Struktura projektu

```
yamako/
├── app/                          # Strony Next.js
│   ├── page.tsx                  # Strona główna
│   ├── layout.tsx                # Layout główny
│   ├── globals.css               # Globalne style
│   ├── api/                      # API routes
│   │   └── send/
│   │       └── route.ts          # Endpoint do wysyłania emaili
│   ├── FAQ/                      # Strona FAQ
│   ├── polityka-prywatnosci/     # Polityka prywatności
│   └── regulamin/                # Regulamin
│
├── components/                   # Komponenty React
│   ├── Header.tsx                # Nagłówek
│   ├── Footer.tsx                # Stopka
│   ├── Introduction.tsx           # Sekcja wprowadzenia
│   ├── AboutMe.tsx               # O mnie
│   ├── AboutSession.tsx          # O sesjach
│   ├── HowItsDone.tsx            # Jak to działa
│   ├── Pricing.tsx               # Cennik
│   ├── Contact.tsx               # Sekcja kontaktu
│   ├── ContactForm.tsx           # Formularz kontaktowy
│   ├── Slider.tsx                # Galereria/slider
│   ├── utils/                    # Komponenty narzędziowe
│   │   ├── FadeInAnim.tsx        # Animacja fade-in
│   │   ├── ScaleInAnim.tsx       # Animacja skalowania
│   │   ├── FaqModule.tsx         # Moduł FAQ
│   │   └── Nav.tsx               # Nawigacja
│   └── *.module.css              # Style CSS modules
│
├── lib/
│   └── types.ts                  # Wspólne typy TypeScript
│
├── public/                       # Zasoby statyczne
│   └── where/                    # Galeria/obrazy
│
├── fonts/                        # Niestandardowe fonty
│
├── eslint.config.mjs             # Konfiguracja ESLint
├── next.config.ts                # Konfiguracja Next.js
├── tsconfig.json                 # Konfiguracja TypeScript
├── package.json                  # Zależności i skrypty
└── README.md                     # Ten plik
```

## 🛠️ Technologia

### Frontend

- **Next.js** 15.1.6 - Framework React z SSR/SSG
- **React** 19.0.0 - Biblioteka UI
- **TypeScript** 5 - Typowanie statyczne
- **CSS Modules** - Scoped styling

### Biblioteki

- **React Hook Form** - Zarządzanie formularzami
- **Zod** - Walidacja typów
- **Resend** - Wysyłanie emaili
- **Swiper** - Carousele i slidery
- **Motion** - Animacje i przejścia
- **Hookform Resolvers** - Integracja React Hook Form z Zod

### Narzędzia deweloperskie

- **ESLint** - Linting kodu
- **TypeScript** - Sprawdzanie typów

## 📧 Funkcje

### Formularz Kontaktowy

- Walidacja w real-time
- Wysyłanie emaili przez **Resend**
- Obsługa błędów
- Feedback dla użytkownika

### Strony

- **Strona główna** - Pełna prezentacja usług
- **FAQ** - Pytania i odpowiedzi
- **Polityka prywatności** - Dokumentacja legalna
- **Regulamin** - Warunki użytkowania

### Animacje

- Fade-in dla elementów
- Scale-in dla przyciągania uwagi
- Smooth scrolling
- Efekty hover

## Kontakt

Jeśli chcesz nawiązać współpracę lub masz pytania, skontaktuj się ze mną:

- Imię i nazwisko: Cezary Makowski
- E-mail: cezary.makowski96@gmail.com
