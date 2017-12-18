class Api::V1::PoemsController < ApplicationController
	def index
		@poems = Poem.all
		render json: @poems
	end

	def create
		@poem = Poem.new(content: params[:poem][:content], 
					title: params[:poem][:title],
					rating_count: 0,
					total_rating: 0)
		if @poem.save
			render json: @poem
		else 
			render json: {failure: "That's not a poem!"}
		end
	end

	def update

		@poem = Poem.find(params[:id])

		@poem.update(content: params[:poem][:content], 
					title: params[:poem][:title])
		render json: @poem
	end
end