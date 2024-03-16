(function () {/* Provides language patches for the Meerkat v3.1.0 addon. */var _statamic = window['Statamic'];_statamic.booting(function() {var _cst = _statamic.$config.get('translations');_cst['meerkat::actions.ok']= 'Got it';_cst['meerkat::actions.cancel']= 'Cancel';_cst['meerkat::actions.confirm']= 'Confirm';_cst['meerkat::actions.try_again']= 'Try Again';_cst['meerkat::actions.discard_changes']= 'Discard Changes';_cst['meerkat::actions.submit_error_try_again']= 'Submit and Try Again';_cst['meerkat::actions.manage']= 'Manage';_cst['meerkat::actions.meerkat_settings']= 'Meerkat Configuration';_cst['meerkat::actions.view_entry']= 'View Entry';_cst['meerkat::actions.reload_anyway']= 'Reload Anyway';_cst['meerkat::actions.export']= 'Export';_cst['meerkat::actions.export_json']= 'JSON';_cst['meerkat::actions.export_csv']= 'CSV';_cst['meerkat::actions.spam']= 'Manage Spam';_cst['meerkat::actions.remove_all_spam']= 'Delete all Spam';_cst['meerkat::actions.check_for_spam']= 'Check for Spam';_cst['meerkat::actions.check_all_spam_error']= 'There was a problem checking all comments for spam';_cst['meerkat::actions.check_all_spam_task_created']= 'The spam check task has been started';_cst['meerkat::actions.check_all_spam_complete']= 'The spam check has completed';_cst['meerkat::actions.check_all_spam_canceled']= 'The spam check task was canceled';_cst['meerkat::actions.check_all_spam_complete_open_editors']= 'The spam check has completed, but it looks like you are making changes. The loaded list will not be updated automatically.';_cst['meerkat::actions.select_comment']= 'Select this comment';_cst['meerkat::actions.select_all_comments']= 'Select all visible comments';_cst['meerkat::actions.bulk_perform_action']= 'Perform Action';_cst['meerkat::actions.bulk_list_approve']= 'Publish the selected comment(s)';_cst['meerkat::actions.bulk_list_unapprove']= 'Unpublish the selected comment(s)';_cst['meerkat::actions.bulk_list_delete']= 'Delete the selected comment(s)';_cst['meerkat::actions.bulk_list_spam']= 'Mark the selected comment(s) as spam';_cst['meerkat::actions.bulk_list_ham']= 'Mark the selected comment(s) as not spam';_cst['meerkat::actions.approve']= 'Publish';_cst['meerkat::actions.approve_confirm_title']= 'Publish Comment';_cst['meerkat::actions.approve_confirm_title_active']= 'Publishing Comment';_cst['meerkat::actions.approve_confirm_progress_message']= 'Publishing comment. Please wait...';_cst['meerkat::actions.approve_confirm_message']= 'Are you sure you want to publish this comment? This comment may be visible to visitors.';_cst['meerkat::actions.approve_confirm_abandoned']= 'The publish action was abandoned';_cst['meerkat::actions.approve_error_encountered']= 'An error was encountered while publishing the comment. Would you like to try again?';_cst['meerkat::actions.approve_success']= 'The comment was approved';_cst['meerkat::actions.bulk_approve']= 'Publish Comments';_cst['meerkat::actions.bulk_approve_confirm_title']= 'Publish Comments';_cst['meerkat::actions.bulk_approve_confirm_title_active']= 'Publishing Comments';_cst['meerkat::actions.bulk_approve_confirm_progress_message']= 'Publishing comments. Please wait...';_cst['meerkat::actions.bulk_approve_confirm_message']= 'Are you sure you want to publish these comments? These comments may be visible to visitors.';_cst['meerkat::actions.bulk_approve_confirm_abandoned']= 'The publish action was abandoned';_cst['meerkat::actions.bulk_approve_error_encountered']= 'An error was encountered while publishing the comments. Would you like to try again?';_cst['meerkat::actions.bulk_approve_success']= 'The comments were approved';_cst['meerkat::actions.unapprove']= 'Unpublish';_cst['meerkat::actions.unapprove_confirm_title']= 'Unpublish Comment';_cst['meerkat::actions.unapprove_confirm_title_active']= 'Unpublishing Comment';_cst['meerkat::actions.unapprove_confirm_progress_message']= 'Unpublishing comment. Please wait...';_cst['meerkat::actions.unapprove_confirm_message']= 'Are you sure you want to unpublish this comment?';_cst['meerkat::actions.unapprove_confirm_abandoned']= 'The unpublish action was abandoned';_cst['meerkat::actions.unapprove_error_encountered']= 'An error was encountered while unpublishing the comment. Would you like to try again?';_cst['meerkat::actions.unapprove_success']= 'The comment was unpublished';_cst['meerkat::actions.bulk_unapprove']= 'Unpublish Comments';_cst['meerkat::actions.bulk_unapprove_confirm_title']= 'Unpublish Comments';_cst['meerkat::actions.bulk_unapprove_confirm_title_active']= 'Unpublishing Comments';_cst['meerkat::actions.bulk_unapprove_confirm_progress_message']= 'Unpublishing comments. Please wait...';_cst['meerkat::actions.bulk_unapprove_confirm_message']= 'Are you sure you want to unpublish these comments?';_cst['meerkat::actions.bulk_unapprove_confirm_abandoned']= 'The unpublish action was abandoned';_cst['meerkat::actions.bulk_unapprove_error_encountered']= 'An error was encountered while unpublishing the comments. Would you like to try again?';_cst['meerkat::actions.bulk_unapprove_success']= 'The comments were unpublished';_cst['meerkat::actions.delete']= 'Delete';_cst['meerkat::actions.delete_confirm_title']= 'Delete Comment';_cst['meerkat::actions.delete_confirm_title_active']= 'Deleting Comment';_cst['meerkat::actions.delete_confirm_progress_message']= 'Deleting comment. Please wait...';_cst['meerkat::actions.delete_confirm_message']= 'Are you sure you want to delete this comment? Any replies may also be automatically removed.';_cst['meerkat::actions.delete_confirm_abandoned']= 'The delete action was abandoned';_cst['meerkat::actions.delete_error_encountered']= 'An error was encountered while deleting the comment. Would you like to try again?';_cst['meerkat::actions.delete_success']= 'The comment was deleted';_cst['meerkat::actions.bulk_delete']= 'Delete Comments';_cst['meerkat::actions.bulk_delete_confirm_title']= 'Delete Comments';_cst['meerkat::actions.bulk_delete_confirm_title_active']= 'Deleting Comments';_cst['meerkat::actions.bulk_delete_confirm_progress_message']= 'Deleting comments. Please wait...';_cst['meerkat::actions.bulk_delete_confirm_message']= 'Are you sure you want to delete these comments? Any replies may also be automatically removed.';_cst['meerkat::actions.bulk_delete_confirm_abandoned']= 'The delete action was abandoned';_cst['meerkat::actions.bulk_delete_error_encountered']= 'An error was encountered while deleting the comments. Would you like to try again?';_cst['meerkat::actions.bulk_delete_success']= 'The comments were deleted';_cst['meerkat::actions.edit']= 'Edit';_cst['meerkat::actions.edit_confirm_button']= 'Update';_cst['meerkat::actions.edit_confirm_title']= 'Edit Comment';_cst['meerkat::actions.edit_confirm_title_active']= 'Updating Comment';_cst['meerkat::actions.edit_confirm_progress_message']= 'Updating comment. Please wait...';_cst['meerkat::actions.edit_confirm_message']= 'Are you sure you want to update this comment?';_cst['meerkat::actions.edit_confirm_abandoned']= 'The update action was abandoned';_cst['meerkat::actions.edit_error_encountered']= 'An error was encountered while updating the comment. Would you like to try again?';_cst['meerkat::actions.edit_success']= 'The comment was updated';_cst['meerkat::actions.edit_unsaved_changes_confirm_title']= 'There are unsaved changes';_cst['meerkat::actions.edit_unsaved_changes_confirm_message']= 'If you continue, you will lose all unsaved changes. Would you like to continue and discard these changes?';_cst['meerkat::actions.reply']= 'Reply';_cst['meerkat::actions.reply_confirm_button']= 'Reply';_cst['meerkat::actions.reply_confirm_title']= 'Reply to Comment';_cst['meerkat::actions.reply_confirm_title_active']= 'Submitting Comment';_cst['meerkat::actions.reply_confirm_progress_message']= 'Submitting comment. Please wait...';_cst['meerkat::actions.reply_confirm_message']= 'Are you sure you want to reply to this comment?';_cst['meerkat::actions.reply_confirm_abandoned']= 'The reply action was abandoned';_cst['meerkat::actions.reply_error_encountered']= 'An error was encountered while submitting the comment. Would you like to try again?';_cst['meerkat::actions.reply_success']= 'The comment was submitted';_cst['meerkat::actions.update_spam']= 'Update Spam';_cst['meerkat::actions.update_as_spam']= 'Mark as spam';_cst['meerkat::actions.update_as_ham']= 'Mark as ham';_cst['meerkat::actions.mark_spam']= 'Spam';_cst['meerkat::actions.mark_spam_confirm_title']= 'Mark Comment as Spam';_cst['meerkat::actions.mark_spam_confirm_title_active']= 'Marking Comment as Spam';_cst['meerkat::actions.mark_spam_confirm_progress_message']= 'Marking comment as spam. Please wait...';_cst['meerkat::actions.mark_spam_confirm_message']= 'Are you sure you want to mark this comment as spam?';_cst['meerkat::actions.mark_spam_confirm_abandoned']= 'The mark as spam action was abandoned';_cst['meerkat::actions.mark_spam_error_encountered']= 'An error was encountered while marking the comment as spam. Would you like to try again?';_cst['meerkat::actions.mark_spam_success']= 'The comment was marked as spam';_cst['meerkat::actions.bulk_mark_spam']= 'Spam';_cst['meerkat::actions.bulk_mark_spam_confirm_title']= 'Mark Comments as Spam';_cst['meerkat::actions.bulk_mark_spam_confirm_title_active']= 'Marking Comments as Spam';_cst['meerkat::actions.bulk_mark_spam_confirm_progress_message']= 'Marking comments as spam. Please wait...';_cst['meerkat::actions.bulk_mark_spam_confirm_message']= 'Are you sure you want to mark these comments as spam?';_cst['meerkat::actions.bulk_mark_spam_confirm_abandoned']= 'The mark as spam action was abandoned';_cst['meerkat::actions.bulk_mark_spam_error_encountered']= 'An error was encountered while marking the comments as spam. Would you like to try again?';_cst['meerkat::actions.bulk_mark_spam_success']= 'The comments were marked as spam';_cst['meerkat::actions.mark_ham']= 'Not Spam';_cst['meerkat::actions.mark_ham_confirm_title']= 'Mark Comment as Not Spam';_cst['meerkat::actions.mark_ham_confirm_title_active']= 'Marking Comment as Not Spam';_cst['meerkat::actions.mark_ham_confirm_progress_message']= 'Marking comment as not spam. Please wait...';_cst['meerkat::actions.mark_ham_confirm_message']= 'Are you sure you want to mark this comment as not spam?';_cst['meerkat::actions.mark_ham_confirm_abandoned']= 'The mark as not spam action was abandoned';_cst['meerkat::actions.mark_ham_error_encountered']= 'An error was encountered while marking the comment as not spam. Would you like to try again?';_cst['meerkat::actions.mark_ham_success']= 'The comment was marked as not spam';_cst['meerkat::actions.bulk_mark_ham']= 'Not Spam';_cst['meerkat::actions.bulk_mark_ham_confirm_title']= 'Mark Comments as Not Spam';_cst['meerkat::actions.bulk_mark_ham_confirm_title_active']= 'Marking Comments as Not Spam';_cst['meerkat::actions.bulk_mark_ham_confirm_progress_message']= 'Marking comments as not spam. Please wait...';_cst['meerkat::actions.bulk_mark_ham_confirm_message']= 'Are you sure you want to mark these comments as not spam?';_cst['meerkat::actions.bulk_mark_ham_confirm_abandoned']= 'The mark as not spam action was abandoned';_cst['meerkat::actions.bulk_mark_ham_error_encountered']= 'An error was encountered while marking the comments as not spam. Would you like to try again?';_cst['meerkat::actions.bulk_mark_ham_success']= 'The comments were marked as not spam';_cst['meerkat::actions.bulk_remove_spam']= 'Remove all Spam';_cst['meerkat::actions.bulk_remove_spam_confirm_title']= 'Remove all Spam';_cst['meerkat::actions.bulk_remove_spam_confirm_title_active']= 'Cleaning Up Spam';_cst['meerkat::actions.bulk_remove_spam_confirm_progress_message']= 'Removing spam comments. Please wait...';_cst['meerkat::actions.bulk_remove_spam_confirm_message']= 'Are you sure you want to remove all spam comments? This may remove any replies associated with those comments.';_cst['meerkat::actions.bulk_remove_spam_confirm_abandoned']= 'The spam cleanup action was abandoned';_cst['meerkat::actions.bulk_remove_spam_error_encountered']= 'An error was encountered while removing the spam comments. Would you like to try again?';_cst['meerkat::actions.bulk_remove_spam_success']= 'The existing spam comments were removed';_cst['meerkat::codes.04-001']= 'errors.request_comment_not_found';_cst['meerkat::codes.05-001']= 'errors.missing_permission_can_view';_cst['meerkat::codes.05-002']= 'errors.missing_permission_can_approve';_cst['meerkat::codes.05-003']= 'errors.missing_permission_can_unapprove';_cst['meerkat::codes.05-004']= 'errors.missing_permission_can_reply';_cst['meerkat::codes.05-005']= 'errors.missing_permission_can_edit';_cst['meerkat::codes.05-006']= 'errors.missing_permission_can_report_spam';_cst['meerkat::codes.05-007']= 'errors.missing_permission_can_report_ham';_cst['meerkat::codes.05-008']= 'errors.missing_permission_can_remove';_cst['meerkat::codes.05-009']= 'errors.missing_permission_sys_admin';_cst['meerkat::codes.05-010']= 'errors.missing_permission_cp_config';_cst['meerkat::codes.09-001']= 'errors.config_missing_parameters';_cst['meerkat::commands.stat_threads']= 'Threads';_cst['meerkat::commands.stat_total_comments']= 'Total Comments';_cst['meerkat::commands.stat_spam']= 'Spam';_cst['meerkat::commands.stat_spam_and_published']= 'Spam & Published';_cst['meerkat::commands.stat_published']= 'Published';_cst['meerkat::commands.stat_pending']= 'Pending';_cst['meerkat::commands.stat_requires_migration']= 'Requires Migration';_cst['meerkat::commands.stat_generated_in']= 'Statistics gathered in :seconds seconds.';_cst['meerkat::commands.migrate_analyze_threads']= 'Discovered :threads thread(s) that will be analyzed.';_cst['meerkat::commands.migrate_analyzed_count']= 'Total: :comments comments(s) across all threads analyzed.';_cst['meerkat::commands.migrate_structure_update_needed']= ':comments comment(s) need a data structure update.';_cst['meerkat::commands.migrate_comments_updated']= ':comments comment(s) updated!';_cst['meerkat::commands.validate_header']= 'Meerkat Installation Validator';_cst['meerkat::commands.validate_description']= 'Validates the current Meerkat installation and configuration.';_cst['meerkat::commands.validate_storage_drivers']= 'Validating Storage Drivers';_cst['meerkat::commands.validate_storage_valid']= 'No issues discovered with storage driver configuration.';_cst['meerkat::commands.validate_thread_valid']= 'Thread driver configuration valid.';_cst['meerkat::commands.validate_driver_configuration']= 'Checking Driver Configuration';_cst['meerkat::commands.validate_possible_solution']= 'A possible solution for: :errorcode';_cst['meerkat::commands.validate_error_code']= 'Error code: :errorcode';_cst['meerkat::config.updated']= 'Your site\'s configuration values were updated.';_cst['meerkat::config.preferences_updated']= 'Your user preferences were updated.';_cst['meerkat::config.save']= 'Save';_cst['meerkat::config.managed_notice']= 'Some items are managed by your site\'s administrator and cannot be changed from the Control Panel.';_cst['meerkat::config.tab_general']= 'General';_cst['meerkat::config.preferences_title']= 'Your Preferences';_cst['meerkat::config.preferences_desc']= 'These settings are yours, and will follow you around on each device you access this Statamic Control Panel on.';_cst['meerkat::config.avatar']= 'Control Panel Avatar';_cst['meerkat::config.avatar_desc']= 'Controls how submission authors appear in the Control Panel.';_cst['meerkat::config.per_page']= 'Submissions per Page';_cst['meerkat::config.per_page_desc']= 'Controls how many submissions are displayed per page by default.';_cst['meerkat::config.publishing_title']= 'Comment Publishing';_cst['meerkat::config.publishing_desc']= 'The publish settings allow you to control various automated aspects of the comment submission process.';_cst['meerkat::config.only_accept_comments_from_authenticated_users']= 'Only Accept Authenticated Comments';_cst['meerkat::config.only_accept_comments_from_authenticated_users_desc']= 'Only accept comments from authenticated user sessions; anonymous, or guest, comments will be rejected.';_cst['meerkat::config.publish_auto']= 'Publish Comments Automatically';_cst['meerkat::config.publish_auto_desc']= 'All comments from anonymous users will be published automatically when enabled. Disable this to review comments before they are listed on your site.';_cst['meerkat::config.publish_user_auto']= 'Publish User Comments Automatically';_cst['meerkat::config.publish_user_auto_desc']= 'Any comment left by an authenticated Statamic user will be published automatically when enabled.';_cst['meerkat::config.close_threads']= 'When to Close Comment Threads';_cst['meerkat::config.close_threads_desc']= 'Enter the number of days after which comments will no longer be accepted; entering a value of "0" will disable this feature.';_cst['meerkat::config.tab_email']= 'Email';_cst['meerkat::config.email_general_title']= 'Email Settings';_cst['meerkat::config.email_general_desc']= 'These settings control the automated submission email system.';_cst['meerkat::config.email_send_mail']= 'Send Mail';_cst['meerkat::config.email_send_mail_desc']= 'Controls if emails are automatically sent.';_cst['meerkat::config.email_check_spam_guard']= 'Check Spam';_cst['meerkat::config.email_check_spam_guard_desc']= 'If enabled, only comments not marked as spam will send an email.';_cst['meerkat::config.email_addresses']= 'Addresses to Send Emails';_cst['meerkat::config.email_addresses_desc']= 'The list of email addresses to send emails to.';_cst['meerkat::config.email_addresses_notice']= 'Your site administrator has configured default email addresses.';_cst['meerkat::config.email_addresses_view_defaults']= 'Click here to view them.';_cst['meerkat::config.email_addresses_default_title']= 'Email Address Defaults';_cst['meerkat::config.email_addresses_default_desc']= 'Your site administrator has configured default email addresses that will be sent to in addition to the ones configured in the Control Panel.';_cst['meerkat::config.tab_spam']= 'Spam';_cst['meerkat::config.spam_general_title']= 'General Spam Settings';_cst['meerkat::config.spam_general_desc']= 'The Meerkat spam service helps to protect your site from spam, and is highly customizable. You may automatically check all incoming submissions for spam, delete spam as soon as its detected, and much more.';_cst['meerkat::config.auto_check_spam']= 'Automatically Check for Spam';_cst['meerkat::config.auto_check_spam_desc']= 'Controls whether all submissions are automatically checked for spam.';_cst['meerkat::config.auto_delete_spam']= 'Automatically Delete all Spam';_cst['meerkat::config.auto_delete_spam_desc']= 'Controls whether submissions identified as spam are automatically deleted.';_cst['meerkat::config.check_all_spam_guards']= 'Check All Spam Guards';_cst['meerkat::config.check_all_spam_guards_desc']= 'When enabled, all spam guards will be checked even if one has already determined a submission was spam.';_cst['meerkat::config.unpublish_on_guard_failures']= 'Unpublish Comments on Guard Failures';_cst['meerkat::config.unpublish_on_guard_failures_desc']= 'Controls whether comments are automatically unpublished if an error occurs.';_cst['meerkat::config.submit_moderator_results']= 'Submit Moderator Results';_cst['meerkat::config.submit_moderator_results_desc']= 'Controls whether false positive/negatives are sent to third-party providers.';_cst['meerkat::config.spam_guards_title']= 'Spam Guards';_cst['meerkat::config.spam_guards_desc']= 'Spam guards improve the built-in spam service by allowing it to utilize additional methods to check for spam. If there are no spam guards enabled, Meerkat will not be able to determine if submissions are spam.';_cst['meerkat::config.table_spam_guard']= 'Spam Guard';_cst['meerkat::config.table_enabled']= 'Enabled';_cst['meerkat::config.akismet_title']= 'Akismet Configuration';_cst['meerkat::config.akismet_desc']= 'Akismet is a third-party service, and needs a few extra configuration items to work properly.';_cst['meerkat::config.akismet_link_text']= 'Learn more about Akismet on their website.';_cst['meerkat::config.akismet_api_key']= 'API Key';_cst['meerkat::config.akismet_api_key_desc']= 'Your Akismet API key.';_cst['meerkat::config.akismet_front_page']= 'Front Page';_cst['meerkat::config.akismet_front_page_desc']= 'The Akismet front page to use.';_cst['meerkat::config.tab_ip_address_filter']= 'IP Address Filter';_cst['meerkat::config.ip_filter_title']= 'IP Address Filter';_cst['meerkat::config.ip_filter_desc']= 'If a submission is sent from a network with any of the following IP addresses, it will be marked as spam.';_cst['meerkat::config.ip_filter_blocked']= 'Blocked IP Addresses';_cst['meerkat::config.ip_filter_blocked_desc']= 'The list of IP addresses to check all new submissions against.';_cst['meerkat::config.ip_filter_managed_notice']= 'Your site administrator has configured default IP addresses.';_cst['meerkat::config.ip_filter_view_defaults']= 'Click here to view them.';_cst['meerkat::config.ip_filter_default_title']= 'IP Address Defaults';_cst['meerkat::config.ip_filter_default_desc']= 'Your site administrator has configured default IP addresses that will be checked in addition to the ones configured in the Control Panel.';_cst['meerkat::config.tab_word_filter']= 'Word Filter';_cst['meerkat::config.word_filter_title']= 'Word Filter';_cst['meerkat::config.word_filter_desc']= 'If a submission contains any of the words in the list below, it will be marked as spam.';_cst['meerkat::config.word_filter_banned']= 'Banned Words';_cst['meerkat::config.word_filter_banned_desc']= 'The list of words to check all new submissions against.';_cst['meerkat::config.word_filter_managed_notice']= ' Your site administrator has configured default banned words.';_cst['meerkat::config.word_filter_view_defaults']= 'Click here to view them.';_cst['meerkat::config.word_filter_default_title']= 'Word Filter Defaults';_cst['meerkat::config.word_filter_default_desc']= 'Your site administrator has configured default words that will be checked in addition to the ones configured in the Control Panel.';_cst['meerkat::config.tab_permissions']= 'Permissions';_cst['meerkat::config.permissions_title']= 'User Group Permissions';_cst['meerkat::config.permissions_desc']= 'User group permissions allow you to control what actions users of different User Groups can take. For example, you can create a User Group specifically for moderators who can only view, approve, or remove comments. If you use a spam service provider that charges per API request, you may also wish to limit who can issue those requests.';_cst['meerkat::config.table_user_group']= 'User Group';_cst['meerkat::config.table_all']= 'All';_cst['meerkat::config.table_view_comments']= 'View Comments';_cst['meerkat::config.table_approve']= 'Approve';_cst['meerkat::config.table_unapprove']= 'Unapprove';_cst['meerkat::config.table_edit']= 'Edit';_cst['meerkat::config.table_reply']= 'Reply';_cst['meerkat::config.table_report_ham']= 'Report Ham';_cst['meerkat::config.table_report_spam']= 'Report Spam';_cst['meerkat::config.table_delete']= 'Delete';_cst['meerkat::config.validate_akismet_prompt']= 'Click to validate your Akismet configuration.';_cst['meerkat::config.validate_akismet_validating']= 'Validating your configuration. One moment please.';_cst['meerkat::config.validate_akismet_okay']= 'The Akismet API configuration was validated successfully.';_cst['meerkat::config.validate_akismet_failure']= 'Something went wrong while validating the Akismet API configuration.';_cst['meerkat::config.validate_akismet_no_params']= 'Required parameters are missing to validate your Akismet configuration.';_cst['meerkat::config.validate_akismet_api_invalid']= 'The Akismet API has determined your API key configuration is invalid.';_cst['meerkat::config.server_changes_warning_title']= 'Configuration Changes Detected';_cst['meerkat::config.server_changes_warning_message']= 'Changes to your site\'s configuration were detected since you last loaded this page; any changes you save will overwrite those changes.';_cst['meerkat::config.server_changes_warning_reload_prompt']= 'Click here to reload your settings.';_cst['meerkat::config.tab_privacy']= 'User Privacy';_cst['meerkat::config.privacy_title']= 'Visitor Submission Data Privacy';_cst['meerkat::config.privacy_desc']= 'Meerkat may be configured to selectively collect the following data about your site visitors when they submit a comment. Some data may be used by some spam guards to improve spam detection accuracy.';_cst['meerkat::config.privacy_table_data']= 'User Data';_cst['meerkat::config.privacy_table_enabled']= 'Collect';_cst['meerkat::config.privacy_store_user_agent_title']= 'Browser User Agent';_cst['meerkat::config.privacy_store_user_agent_desc']= 'Controls whether browser and operating system information is collected';_cst['meerkat::config.privacy_store_user_ip_title']= 'User IP Address';_cst['meerkat::config.privacy_store_user_ip_desc']= 'Controls whether visitor IP Address information is collected';_cst['meerkat::config.privacy_store_referrer_title']= 'HTTP Referrer Header';_cst['meerkat::config.privacy_store_referrer_desc']= 'Controls whether visitor HTTP Referrer information is collected';_cst['meerkat::display.per_page']= 'Per page';_cst['meerkat::display.loading']= 'Loading';_cst['meerkat::display.nav_comments']= 'Comments';_cst['meerkat::display.nav_settings']= 'Meerkat';_cst['meerkat::display.header_comments']= 'Comments';_cst['meerkat::display.header_author']= 'Author';_cst['meerkat::display.header_comment']= 'Comment';_cst['meerkat::display.header_configure']= 'Configure Meerkat';_cst['meerkat::display.thread_single_response']= 'All in response to:';_cst['meerkat::display.thread_multiple_response']= 'In response to:';_cst['meerkat::display.author_in_reply_to']= 'Replying to:';_cst['meerkat::display.anonymous_email']= 'no-email@example.org';_cst['meerkat::display.anonymous_author']= 'Anonymous User';_cst['meerkat::email.disclaimer']= 'You are receiving this automated email because of your site\'s configuration.';_cst['meerkat::email.message']= 'You have received a new comment submission:';_cst['meerkat::email.view_in_control_panel']= 'View in Control Panel';_cst['meerkat::email.subject']= 'New Comment Submission';_cst['meerkat::errors.message']= 'Something unexpected happened.';_cst['meerkat::errors.general']= 'An error was encountered while performing the action. Would you like to try again?';_cst['meerkat::errors.permissions']= 'You do not have permissions to complete this action. Please contact your site administrator for more information.';_cst['meerkat::errors.process_repeated_failure']= 'This action has failed numerous times. Would you like to try again?';_cst['meerkat::errors.process_long_process']= 'This action is taking longer than usual.';_cst['meerkat::errors.process_taking_too_long']= 'This is taking longer than usual. Just a moment...';_cst['meerkat::errors.process_abandon']= 'Would you like to cancel this action or try again? Even if canceled, this action may still complete in the background.';_cst['meerkat::errors.loading_error_log']= 'Fetching error details...';_cst['meerkat::errors.no_error_details']= 'Could not locate error details.';_cst['meerkat::errors.submit_error_report']= 'Submit Error Report';_cst['meerkat::errors.submit_error_report_request']= 'Additionally, the following error report was generated. Would you like to submit it?';_cst['meerkat::errors.client_side_error']= 'A client/browser error occurred.';_cst['meerkat::errors.request_no_comment_provided']= 'No comment was provided.';_cst['meerkat::errors.request_comment_not_found']= 'Comment with ID \':comment_id\' not found.';_cst['meerkat::errors.missing_permission_can_view']= 'Cannot view comments.';_cst['meerkat::errors.missing_permission_can_approve']= 'Cannot publish comments.';_cst['meerkat::errors.missing_permission_can_unapprove']= 'Cannot unpublish comments,';_cst['meerkat::errors.missing_permission_can_reply']= 'Cannot reply to comments.';_cst['meerkat::errors.missing_permission_can_edit']= 'Cannot edit comments.';_cst['meerkat::errors.missing_permission_can_report_spam']= 'Cannot report comments as spam.';_cst['meerkat::errors.missing_permission_can_report_ham']= 'Cannot report comments as not spam.';_cst['meerkat::errors.missing_permission_can_remove']= 'Cannot delete comments.';_cst['meerkat::errors.missing_permission_sys_admin']= 'You are not a super user.';_cst['meerkat::errors.missing_permission_cp_config']= 'Control Panel configuration has been disabled for this site.';_cst['meerkat::errors.config_missing_parameters']= 'Missing or invalid parameters were supplied.';_cst['meerkat::errors.const_preferences_unknown_failure']= 'There was a problem trying to update your settings; please try again.';_cst['meerkat::errors.config_preferences_failure']= 'Your preferences couldn\'t be updated; please try again.';_cst['meerkat::errors.config_settings_failure']= 'The site settings couldn\'t be updated; please try again.';_cst['meerkat::errors.config_both_failure']= 'Your preferences or site settings couldn\'t be updated; please try again.';_cst['meerkat::fields.transform']= JSON.parse('{"true":"Yes","false":"No"}');_cst['meerkat::fields.author']= JSON.parse('{"name":"Name","email":"Email","user_agent":"User Agent","user_ip":"IP Address","referer":"Referrer"}');_cst['meerkat::fields.comment']= JSON.parse('{"date":"Date","content":"Comment","is_spam":"Spam","published":"Published"}');_cst['meerkat::fields.entry']= JSON.parse('{"id":"Entry ID","title":"Entry Title"}');_cst['meerkat::filters.toggle']= 'Click to toggle the filter display';_cst['meerkat::filters.all']= 'All';_cst['meerkat::filters.published']= 'Published';_cst['meerkat::filters.spam']= 'Spam';_cst['meerkat::filters.pending']= 'Pending';_cst['meerkat::filters.no_data']= 'We\'ve searched everywhere and found nothing';_cst['meerkat::filters.no_data_filter']= 'This is most likely due to the current filters';_cst['meerkat::filters.search_placeholder']= 'Search within comments...';_cst['meerkat::general.meerkat']= 'Meerkat';_cst['meerkat::general.statamic_addons']= 'Addons';_cst['meerkat::general.installation_validation']= 'Meerkat Installation Validator';_cst['meerkat::general.installation_validation_desc']= 'Validates common server configuration issues.';_cst['meerkat::guards.akismet']= 'Akismet';_cst['meerkat::guards.word']= 'Word Filter';_cst['meerkat::guards.ip']= 'IP Filter';_cst['meerkat::guards.deceptive']= 'Deceptive HTML Markup';_cst['meerkat::parser.supplement']= JSON.parse('{"name":"[Name Missing]","email":"[Email Missing]","content":"[Content Missing]"}');_cst['meerkat::validation.yes']= 'Yes';_cst['meerkat::validation.no']= 'No';_cst['meerkat::validation.does_exists']= 'Exists';_cst['meerkat::validation.is_readable']= 'Is Readable';_cst['meerkat::validation.is_writeable']= 'Is Writeable';_cst['meerkat::validation.local_path']= 'Your local path:';_cst['meerkat::validation.system_information']= 'System Information';_cst['meerkat::validation.statamic_version']= 'Statamic Version';_cst['meerkat::validation.meerkat_version']= 'Meerkat Version';_cst['meerkat::validation.server_type']= 'Software Name';_cst['meerkat::validation.clear_route_cache']= 'Clear Route Cache';_cst['meerkat::validation.route_clear_artisan_header']= 'Clearing the Route Cache With Artisan';_cst['meerkat::validation.route_clear_artisan_instructions']= 'To clear the route cache using Laravel\'s Artisan command-line utility, issue the following command in the directory: :directory:';_cst['meerkat::validation.route_clear_manual_header']= 'Clearing the Route Cache Manually';_cst['meerkat::validation.route_clear_manual_instructions']= 'To manually clear the route cache, locate and remove the following file on all servers your site runs on:';_cst['meerkat::validation.category_routes']= 'Route Caching';_cst['meerkat::validation.routes_valid']= 'No route caching issues were detected.';_cst['meerkat::validation.routes_invalid']= 'One or more route caching issues were detected; your site may not function correctly until these issues are resolved. These issues may be resolved by clearing your site\'s route cache. If your site runs on multiple servers, the route cache must be cleared on all servers.';_cst['meerkat::validation.route_category_emissions']= 'Control Panel Assets';_cst['meerkat::validation.route_category_general']= 'General Routes';_cst['meerkat::validation.route_table_header_name']= 'Overview';_cst['meerkat::validation.route_table_header_category']= 'Category';_cst['meerkat::validation.route_table_header_description']= 'Description';_cst['meerkat::validation.route_cache_cleared']= 'Route cache cleared!';_cst['meerkat::validation.emissions_cpConfiguration']= 'Control Panel Configuration';_cst['meerkat::validation.emissions_cpConfiguration_desc']= 'This is required to deliver critical information to Meerkat\'s features within the Statamic Control Panel.';_cst['meerkat::validation.route_category_cp_configuration']= 'Control Panel Configurator';_cst['meerkat::validation.route_category_cp_configuration_desc']= 'Provides and manages Meerkat\'s Control Panel configuration interface.';_cst['meerkat::validation.route_category_spam_api']= 'Spam API';_cst['meerkat::validation.route_category_spam_api_desc']= 'Manages spam moderation requests.';_cst['meerkat::validation.route_category_moderation_api']= 'Moderation API';_cst['meerkat::validation.route_category_moderation_api_desc']= 'Provides the core moderation features such as editing, replying, and comment visibility.';_cst['meerkat::validation.route_category_submission_api']= 'Site Submission API';_cst['meerkat::validation.route_category_submission_api_desc']= 'Handles comment submission from website visitors.';_cst['meerkat::validation.category_config_dir']= 'Configuration and Storage Directories';_cst['meerkat::validation.config_supplement_name']= 'Supplemental Storage Configuration Directory';_cst['meerkat::validation.config_supplement']= 'The supplemental configuration directory contains configuration modifications made through the Statamic Control Panel.';_cst['meerkat::validation.config_users_name']= 'User Configuration Storage Directory';_cst['meerkat::validation.config_users']= 'The user configuration directory contains all user-specific configuration settings for the Statamic Control Panel.';_cst['meerkat::validation.storage_content_name']= 'Comment Storage Directory';_cst['meerkat::validation.storage_content']= 'The Comments storage directory contains all user-submitted content, as well as meta data about your site\'s comments.';_cst['meerkat::validation.storage_meerkat_name']= 'Meerkat System Storage Directory';_cst['meerkat::validation.storage_meerkat']= 'The Meerkat storage directory is where Meerkat will place logs, temporary files, and various other items it needs in order to function properly.';_statamic.$config.set('translations', _cst);})})();