class Api::V2::Accounts::ReportsController < Api::BaseController
  def account
    builder = V2::ReportBuilder.new(current_account, account_report_params)
    data = builder.build
    render json: data
  end

  def account_summary
    render json: account_summary_metrics
  end

  private

  def account_summary_params
    {
      type: :account,
      since: params[:since],
      until: params[:until]
    }
  end

  def account_report_params
    {
      metric: params[:metric],
      type: :account,
      since: params[:since],
      until: params[:until]
    }
  end

  def account_summary_metrics
    builder = V2::ReportBuilder.new(current_account, account_summary_params)
    builder.summary
  end
end
