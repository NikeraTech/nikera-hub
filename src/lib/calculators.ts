export type Calculator = { slug:string; category:string; title:string; shortTitle:string; description:string; icon:string };
export const calculators:Calculator[]=[
 {slug:"mortgage-repayment",category:"Mortgage",title:"Mortgage Repayment Calculator",shortTitle:"Mortgage repayment calculator",description:"Estimate monthly capital-and-interest or interest-only payments.",icon:"£"},
 {slug:"mortgage-affordability",category:"Mortgage",title:"Mortgage Affordability Check",shortTitle:"Mortgage affordability check",description:"Estimate a borrowing range from income and committed monthly credit costs.",icon:"↗"},
 {slug:"stamp-duty",category:"Property costs",title:"Stamp Duty Calculator",shortTitle:"Stamp Duty calculator",description:"Estimate SDLT for residential property in England and Northern Ireland.",icon:"%"},
 {slug:"overpayment",category:"Overpayments and savings",title:"Overpayment Calculator",shortTitle:"Overpayment calculator",description:"Estimate interest saved and time saved by regular monthly overpayments.",icon:"−"},
 {slug:"loan-to-value",category:"Mortgage",title:"Loan-to-Value Calculator",shortTitle:"Loan-to-value calculator",description:"Calculate mortgage amount, deposit and loan-to-value percentage.",icon:"÷"},
 {slug:"deposit",category:"Mortgage",title:"Deposit Calculator",shortTitle:"Deposit calculator",description:"Calculate the deposit needed for a property price and target LTV.",icon:"↓"},
 {slug:"interest-only",category:"Mortgage",title:"Interest-Only Calculator",shortTitle:"Interest-only calculator",description:"Estimate monthly interest-only payments and total interest over a term.",icon:"≈"},
 {slug:"buy-to-let",category:"Buy-to-let",title:"Buy-to-Let Rental Stress Calculator",shortTitle:"Buy-to-let rental stress calculator",description:"Check rental cover against a stress rate and required coverage ratio.",icon:"⌂"},
 {slug:"debt-to-income",category:"Debt and affordability",title:"Debt-to-Income Calculator",shortTitle:"Debt-to-income calculator",description:"Estimate debt-to-income ratio from annual income and monthly credit commitments.",icon:"%"},
 {slug:"early-repayment-charge",category:"Overpayments and savings",title:"Early Repayment Charge Calculator",shortTitle:"Early repayment charge calculator",description:"Estimate an early repayment charge from balance, ERC rate and admin fees.",icon:"!"},
 {slug:"remortgage-savings",category:"Overpayments and savings",title:"Remortgage Savings Calculator",shortTitle:"Remortgage savings calculator",description:"Compare current and new mortgage payments, including fees and break-even time.",icon:"↘"},
 {slug:"protection-needs",category:"Protection",title:"Protection Needs Calculator",shortTitle:"Protection needs calculator",description:"Estimate a simple protection cover gap from mortgage, income and existing cover.",icon:"♡"},
];
export function getCalculator(slug:string){return calculators.find(item=>item.slug===slug)}
