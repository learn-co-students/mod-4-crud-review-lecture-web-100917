Rails.application.routes.draw do
	namespace :api do
		namespace :v1 do
			resources :poems
			resources :comments
		end
	end
end
