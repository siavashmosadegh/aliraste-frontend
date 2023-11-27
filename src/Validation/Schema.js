import * as Yup from 'yup';
const mobileRegex = /^(\+98|0)9\d{9}$/;

export const PersonalInfoFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    lastName: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    fathersName: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    militaryRank: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    id: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
        .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
        .min(8,'باید ۸ رقم باشد')
        .max(8,'باید ۸ رقم باشد'),
    expertiseCode: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
        .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
        .min(8,'باید ۸ رقم باشد')
        .max(8,'باید ۸ رقم باشد'),
    expertiseName: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    nationalCode: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
        .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
        .min(8,'باید ۸ رقم باشد')
        .max(8,'باید ۸ رقم باشد'),
    birthCertificateCity: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    base: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    mobileNumber: Yup.string()
        .matches(mobileRegex,'شماره وارد شده نادرست میباشد')
        .required('وارد کردن این فیلد الزامی است'),
    sepahBankNumber: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
        .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
});

export const EducationInfoFormSchema = Yup.object().shape({
    id: Yup.string()
       .required('وارد کردن این فیلد الزامی است')
       .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
       .min(8,'باید ۸ رقم باشد')
       .max(8,'باید ۸ رقم باشد'),
    generalScore: Yup.number()
        .required('وارد کردن این فیلد الزامی است')
        .max(100, 'نمره باید مساوی یا کوچکتر از ۱۰۰ باشد')
        .min(0, 'نمره باید بزرگتر یا مساوی صفر باشد'),
    expertiseScore: Yup.number()
        .required('وارد کردن این فیلد الزامی است')
        .max(100, 'نمره باید مساوی یا کوچکتر از ۱۰۰ باشد')
        .min(0, 'نمره باید بزرگتر یا مساوی صفر باشد'),
    protectionScore: Yup.number()
        .required('وارد کردن این فیلد الزامی است')
        .max(100, 'نمره باید مساوی یا کوچکتر از ۱۰۰ باشد')
        .min(0, 'نمره باید بزرگتر یا مساوی صفر باشد'),
    religionScore: Yup.number()
        .required('وارد کردن این فیلد الزامی است')
        .max(100, 'نمره باید مساوی یا کوچکتر از ۱۰۰ باشد')
        .min(0, 'نمره باید بزرگتر یا مساوی صفر باشد')
});

export const RegisterLoginSchema = Yup.object().shape({
    mobile: Yup.string()
        .matches(mobileRegex,'شماره وارد شده نادرست میباشد')
        .required('وارد کردن این فیلد الزامی است')
});

// id: "", // شماره پرسنلی
// generalScore: "", // بخش عمومی
// expertiseScore: "", // بخش تخصص
// protectionScore: "", // حفاظت
// religionScore: "", // عقیدتی سیاسی
// internshipSituation: "", // کارورزی
// graduationSituation: "" // وضعیت تحصیلی