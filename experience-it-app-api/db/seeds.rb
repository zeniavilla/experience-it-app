Experience.destroy_all

DATA = {
  :experiences => [
    ['Downtown LA Artwalk', 'Arts', 'Gallery Row', '3 hours', 'nighttime', 'https://www.kristengrunewald.com/wp-content/uploads/2016/11/54a89ee9a4794_-_02-elle-la-travel-guide-sightseeing-downtown-art-walk-xln.jpg'],
    ['Grand Central Market', 'Food & Drink', 'Historic Core', '2 hours', 'anytime', 'http://assets.bonappetit.com/photos/57d6fd84c455f790358b96d2/master/w_680,h_454,c_limit/grand-central-market.jpg'],
    ['Venice Canals', 'Lifestyle', 'Venice', '1 hour', 'daytime', 'https://media.timeout.com/images/101661977/1024/576/image.jpg'],
    ['Paddle Boarding', 'Sports', 'Marina Del Rey', '2 hours', 'daytime', 'http://www3.pictures.zimbio.com/fp/Leilani+Dowding+Leilani+Dowding+Takes+Dog+1sKh84SgPlHl.jpg'],
    ['El Matador State Beach', 'Nature', 'Malibu', '3 hours', 'daytime', 'https://www.californiabeaches.com/wp-content/uploads/2014/09/bigstock-El-Matador-Beach-41403328-e1485481655501-1000x658.jpg'],
    ['Griffith Observatory', 'Technology', 'LA', '1 hour', 'anytime', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Griffith_observatory_2006.jpg/1200px-Griffith_observatory_2006.jpg'],
    ['Abalone Cove', 'Nature', 'Rancho Palos Verdes', '3 hours', 'daytime', 'https://www.jaredolen.com/wp-content/uploads/2013/01/IMG_0835.jpg'],
    ['Echo Mountain', 'Nature', 'Altadena', '3 hours', 'daytime', 'https://latrailhikers.com/wp-content/uploads/2010/02/echo.jpg'],
    ['Walt Disney Concert Hall', 'Music', 'Bunker Hill', '1 hour', 'anytime', 'https://upload.wikimedia.org/wikipedia/commons/d/d6/WaltDisneyConcertHall.jpeg'],
    ['LACMA', 'Arts', 'Miracle Mile', '2 hours', 'anytime', 'http://1vze7o2h8a2b2tyahl3i0t68.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/lacma.jpg'],
    ['Flower Market', 'Lifestyle', 'Flower District', '2 hours', 'daytime', 'https://www.laflowerdistrict.com/images/Market-500.jpg'],
    ['Runyon Canyon Yoga', 'Wellness', 'Hollywood Hills', '1 hour', 'daytime', 'https://i.ytimg.com/vi/ZPv-qpvctTQ/maxresdefault.jpg']
  ],
  :experience_keys => ['name', 'category', 'location', 'time', 'recommended_times', 'img_url']
}

DATA[:experiences].each do |experience|
  new_exp = Experience.new
  experience.each_with_index do |attribute, i|
    new_exp.send(DATA[:experience_keys][i] + "=", attribute)
  end
  new_exp.save
end