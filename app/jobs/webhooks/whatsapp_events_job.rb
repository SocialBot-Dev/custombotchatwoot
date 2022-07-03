class Webhooks::WhatsappEventsJob < ApplicationJob
  queue_as :default

  def perform(params = {})
    channel = find_channel(params)
    return if channel.blank?

    case channel.provider
    when 'whatsapp_cloud'
      Whatsapp::IncomingMessageWhatsappCloudService.new(inbox: channel.inbox, params: params).perform

      # custom for publsihing message statuses
      # HTTParty.post(
      #   "https://dash.wevrlabs.net/modules/addons/whatsappalerts/status.php",
      #   headers: { 'Content-Type' => 'application/json' },
      #   body: {
      #     params
      #   }.to_json
      # )

    else
      Whatsapp::IncomingMessageService.new(inbox: channel.inbox, params: params).perform
    end
  end

  private

  def find_channel(params)
    return unless params[:phone_number]

    Channel::Whatsapp.find_by(phone_number: params[:phone_number])
  end
end
