export const controlBudget = (budget, remaining) => {
    let classAlert;

    if((budget / 4) > remaining) {
        classAlert = 'alert alert-danger';
    } else if ((budget / 2) > remaining) {
        classAlert = 'alert alert-warning';
    } else {
        classAlert = 'alert alert-success';
    }

    return classAlert;
}
