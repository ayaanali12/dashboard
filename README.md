# Jur Dashboard - React.js/Next.js Project

This project replicates a dashboard design as per the provided image. It includes features like responsive design, form validation, and modular components.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Approach](#approach)
4. [Challenges](#challenges)
5. [Assumptions](#assumptions)
6. [Screenshots](#screenshots)

---

## Project Overview

The dashboard includes:
- A **sidebar** navigation menu.
- A **progress bar** showing steps for claim submission.
- A **claim form** with input fields, checkboxes, and file upload components.
- A responsive layout that adapts seamlessly to desktop, tablet, and mobile screens.

---

## Tech Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Version Control**: Git & GitHub

---

## Approach

1. **Modular Components**:  
   - Created reusable components: `Sidebar`, `ProgressBar`, `ClaimForm`, and `UploadField`.
   - Ensured components are clean, scalable, and easy to maintain.

2. **Responsive Design**:  
   - Utilized Tailwind CSS grid system and responsive utilities (`grid-cols`, `flex`, `md`, `sm` breakpoints).

3. **Form Validation**:  
   - Added validation to ensure required fields (e.g., Contract Value) are filled.  
   - Used controlled inputs for interactivity.

4. **Dynamic Elements**:  
   - Checkboxes, dropdowns, and file uploads are functional.

---

## Challenges

1. **CSS Alignment**: Aligning progress bar steps evenly required careful use of Flexbox.  
   **Solution**: Used Tailwind’s `justify-between` and `w-8 h-8` utilities.

2. **Responsive Testing**: Ensuring consistency across screen sizes was challenging.  
   **Solution**: Used Chrome DevTools for real-time responsiveness testing.

3. **File Upload Handling**: Implementing an interactive upload component that matches the design.  
   **Solution**: Added custom file input styling with Tailwind.

---

## Assumptions

1. The input fields and file upload are placeholders without backend integration.
2. Progress bar only visually reflects the steps; no active navigation between steps was implemented.
3. The placeholder values for "Claim Value" and "Contract Value" were based on the design.

---

## Screenshots

### Desktop View
![Desktop View](./dashboard/screenshots/laptop.jpg)

### Tablet View
![Tablet View](./dashboard/screenshots/tablet.jpg)

### Mobile View
![Mobile View](./dashboard/screenshots/mobile.jpg)

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jur-dashboard.git
   cd jur-dashboard
