Rails.application.routes.draw do
  namespace :api do
    resources :experiences, except: [:destroy, :edit, :update]

    post '/sign_up', to: 'register#create', as: 'sign_up'
    get '/profile/:id', to: 'profile#show', as: 'profile'
  end
end
