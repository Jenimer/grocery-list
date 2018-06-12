class Api::ProductsController < ApplicationController
    before_action :set_product, only: [:destroy, :update]

    def index
        render json: Product.all
    end

    def create
        product = Product.new(product_params)
        if Product.save
            render json: product
        else
            render json: { errors: product.errors }, status: 422
        end
    end

    def update
        product = @product
        product.update {done !product.done}
        render json: product
        else
        end
    end

    def destroy
        @product.destroy
        render json: { message: 'Item removed'}
    end

    private

        def set_product
            @product = Product.find(params[:id])
        end

        def product_params
            params.require(:product).permit(:name, :done)
        end

end
