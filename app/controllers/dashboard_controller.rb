class DashboardController < ApplicationController
  def index
    render inertia: 'Dashboard', props: {
      name: 'Inertia Rails'
    }
  end

  def show
    render inertia: 'Show'
  end
end
