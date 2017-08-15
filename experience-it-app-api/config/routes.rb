Rails.application.routes.draw do
  namespace :api do
    resources :experiences, except: [:destroy, :edit]
  end

    post '/sign_up', to: 'users#create', as: 'sign_up'
    get '/profile/:id', to: 'users#show', as: 'profile'
end
