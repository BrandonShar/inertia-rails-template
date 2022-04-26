class DashboardController < ApplicationController
  def index
    render inertia: 'Dashboard', props: {
      name: 'Inertia Rails'
    }
  end
end
