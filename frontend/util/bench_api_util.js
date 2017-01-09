export const fetchBenches = () => (
  $.ajax({
    method: 'GET',
    url: '/benches',
    error: (err) => console.log(err)
  })
);
